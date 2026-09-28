# Password Generator

A simple, responsive password generator built with HTML, JavaScript, Tailwind CSS, and the Tailwind CSS CLI.

## Features

- Generate random passwords from 4 to 24 characters.
- Include or exclude:
  - Lowercase letters (`a-z`)
  - Uppercase letters (`A-Z`)
  - Numbers (`0-9`)
  - Symbols (`@#$%^&*()`)
- Copy generated passwords to the clipboard.
- Displays an error message if no character types are selected.
- Responsive interface styled with Tailwind CSS.

## Technologies

- HTML5
- CSS3
- JavaScript
- Tailwind CSS v4
- Tailwind CSS CLI

## Getting Started

### Prerequisites

- A modern web browser
- Node.js and npm, if you want to rebuild Tailwind CSS during development

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arslan688/password-generator.git
   cd password-generator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Run the project

You can open `index.html` directly in a browser to use the application.

To watch and rebuild the Tailwind CSS file while developing, run:

```bash
npm run dev
```

Keep the development command running, then open `index.html` in your browser.

## Usage

1. Choose a password length using the slider.
2. Select the character types you want to include.
3. Click **Generate Password**.
4. Click the copy button to copy the generated password to your clipboard.

At least one character type must be selected before generating a password.

## Project Structure

```text
.
├── index.html           # Application interface
├── package.json         # Project metadata and development scripts
├── package-lock.json    # Locked dependency versions
└── src/
    ├── input.css        # Tailwind CSS input and custom styles
    ├── output.css       # Generated stylesheet
    └── script.js        # Password generation and clipboard logic
```

## Security Note

This project is intended for learning and personal use. Passwords are generated in the browser and are not sent to a server. For highly sensitive accounts, consider using a trusted password manager with a cryptographically secure password generator.

## License

This project is licensed under the ISC License as specified in `package.json`.
