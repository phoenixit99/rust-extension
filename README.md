# Rust Wallet Extension

A browser extension that implements a simple wallet interface using Rust and WebAssembly.


## Features

- Display wallet balance
- Send and receive transactions
- Transaction history
- Real-time balance updates
- Rust-powered backend logic

<img src="https://github.com/phoenixit99/rust-extension/blob/main/src/assets/Screenshot%202025-02-17%20at%201.47.50%E2%80%AFPM.png" alt="Description of image">

## Prerequisites

Before you begin, ensure you have installed:
- [Rust](https://www.rust-lang.org/tools/install)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Project Structure

## Installation

1. Clone the repository:

```bash
git clone https://github.com/phoenixit99/rust-extension.git
cd rust-extension
```

2. Build the WebAssembly module:
```bash
wasm-pack build --target web
```

3. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the extension directory

## Development

### Building the Rust Components

The Rust code in `src/lib.rs` provides the core wallet functionality. To rebuild after making changes:

```bash
wasm-pack build --target web
```

### Extension Files

- `manifest.json`: Extension configuration and permissions
- `popup.html`: Main UI layout and styling
- `popup.js`: UI logic and WebAssembly integration
- `background.js`: Background processes and state management

### Testing

Run Rust tests:
```bash
cargo test
```

## Usage

1. Click the extension icon in your browser toolbar
2. View your current balance in the wallet card
3. Use "Send" and "Receive" buttons to perform transactions
4. Click the refresh icon to update the balance
5. View transaction history below the wallet card

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Built with Rust and WebAssembly
- Uses Chrome Extension APIs
- Inspired by modern wallet interfaces

<video controls>
  <source src="https://raw.githubusercontent.com/phoenixit99/rust-extension/main/assets/Screen%20Recording%202025-02-07%20at%202.54.36%20PM.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>
