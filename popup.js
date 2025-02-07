import init, { Wallet } from './pkg/rust_extension.js';

async function main() {
    // Initialize WebAssembly module
    await init();
    
    // Create wallet instance
    const wallet = new Wallet();
    
    // Get DOM elements
    const balanceElement = document.querySelector('.balance');
    const refreshButton = document.querySelector('.refresh-icon');
    const sendButton = document.getElementById('sendBtn');
    const receiveButton = document.getElementById('receiveBtn');
    const transactionsContainer = document.getElementById('transactions');
    
    // Update balance display
    function updateBalance() {
        balanceElement.textContent = `$${wallet.get_balance().toFixed(2)}`;
    }

    // Add transaction to history
    function addTransaction(type, amount, name, timestamp = new Date()) {
        const transactionEl = document.createElement('div');
        transactionEl.className = 'transaction-item';
        
        const isReceive = type === 'receive';
        const amountText = isReceive ? `+$${amount.toFixed(2)}` : `-$${amount.toFixed(2)}`;
        const title = isReceive ? `Received from ${name}` : `Sent to ${name}`;
        
        transactionEl.innerHTML = `
            <div class="transaction-info">
                <span class="transaction-title">${title}</span>
                <span class="transaction-time">${timestamp.toLocaleString()}</span>
            </div>
            <span class="transaction-amount ${isReceive ? 'amount-positive' : 'amount-negative'}">${amountText}</span>
        `;
        
        // Insert at the beginning of the list
        const transactionsList = transactionsContainer.querySelector('h2').nextElementSibling;
        if (transactionsList) {
            transactionsContainer.insertBefore(transactionEl, transactionsList);
        } else {
            transactionsContainer.appendChild(transactionEl);
        }
    }
    
    // Initial balance update
    updateBalance();
    
    // Add button handlers
    refreshButton.addEventListener('click', () => {
        updateBalance();
    });

    sendButton.addEventListener('click', () => {
        const amount = parseFloat(prompt('Enter amount to send:') || '0');
        const to = prompt('Enter recipient name:');
        
        if (amount > 0 && to) {
            if (wallet.send(amount)) {
                updateBalance();
                addTransaction('send', amount, to);
                alert('Send successful!');
            } else {
                alert('Insufficient funds!');
            }
        }
    });
    
    receiveButton.addEventListener('click', () => {
        const amount = parseFloat(prompt('Enter amount to receive:') || '0');
        const from = prompt('Enter sender name:');
        
        if (amount > 0 && from) {
            wallet.receive(amount);
            updateBalance();
            addTransaction('receive', amount, from);
            alert('Received successfully!');
        }
    });
}

main().catch(console.error); 