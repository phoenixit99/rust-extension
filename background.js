// Listen for extension installation or update
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed/updated');
});

// Initialize wallet state
let walletState = {
    balance: 2458.00,
    transactions: [
        {
            type: 'receive',
            from: 'John',
            amount: 250.00,
            timestamp: new Date().getTime(),
        },
        {
            type: 'send',
            to: 'Alice',
            amount: 180.00,
            timestamp: new Date().getTime() - 24 * 60 * 60 * 1000, // Yesterday
        }
    ]
};

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
        case 'getWalletState':
            sendResponse(walletState);
            break;

        case 'send':
            if (request.amount && request.amount <= walletState.balance) {
                walletState.balance -= request.amount;
                walletState.transactions.unshift({
                    type: 'send',
                    to: request.to,
                    amount: request.amount,
                    timestamp: new Date().getTime()
                });
                sendResponse({ success: true, newBalance: walletState.balance });
            } else {
                sendResponse({ success: false, error: 'Insufficient funds' });
            }
            break;

        case 'receive':
            if (request.amount) {
                walletState.balance += request.amount;
                walletState.transactions.unshift({
                    type: 'receive',
                    from: request.from,
                    amount: request.amount,
                    timestamp: new Date().getTime()
                });
                sendResponse({ success: true, newBalance: walletState.balance });
            } else {
                sendResponse({ success: false, error: 'Invalid amount' });
            }
            break;

        case 'refreshBalance':
            // In a real application, you might want to fetch the balance from a server
            sendResponse({ balance: walletState.balance });
            break;
    }
    return true; // Required for async response
});

// Optional: Set up periodic balance updates
setInterval(() => {
    // In a real application, you might want to sync with a server here
    console.log('Checking for balance updates...');
}, 60000); // Check every minute 