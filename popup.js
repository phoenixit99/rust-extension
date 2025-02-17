// import init from './pkg/rust_extension.js';
import { log_message } from './pkg/rust_extension.js';

async function main() {
    await init();
    
    // const wallet = new MyWallet();
    
    // Generate or use existing mnemonic
    // const mnemonic = wallet.generate_mnemonic();

    const mnemonic = "Mnemonic test "
    console.log('Generated mnemonic:', mnemonic);
    
    // Initialize wallet with mnemonic
    await wallet.initialize(mnemonic);
    
    // Get Ethereum address
    // const ethAddress = await wallet.get_address(60); // 60 is CoinType for Ethereum
    const ethAddress = "Ethereum address test"
    console.log('Ethereum address:', ethAddress);
    
    // Get Bitcoin address
    // const btcAddress = await wallet.get_address(0); // 0 is CoinType for Bitcoin
    const btcAddress = "Bitcoin address test"
    console.log('Bitcoin address:', btcAddress);
    
    // Update the HTML elements with the wallet data
    document.getElementById('mnemonic').textContent = mnemonic;
    document.getElementById('eth-address').textContent = ethAddress;
    document.getElementById('btc-address').textContent = btcAddress;

    console.log('Mnemonic:', mnemonic);
    console.log('Ethereum Address:', ethAddress);
    console.log('Bitcoin Address:', btcAddress);
}

main().catch(console.error);

log_message("Hello from Rust!"); 