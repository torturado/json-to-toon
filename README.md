# JSON ↔ TOON Converter

An open-source web tool for converting between JSON and TOON (Token-Oriented Object Notation).

## 🚀 Features

- Bidirectional conversion between JSON and TOON
- Real-time automatic conversion
- Configurable options (delimiter, indentation, length marker)
- Automatic JSON formatting
- Modern and responsive interface
- 100% client-side - no server required

## 🔒 Privacy

**Your data stays private.** All conversion happens entirely in your local browser:
- No data is sent to any server
- No data is stored or logged
- No tracking or analytics
- No network requests for conversion
- Your data never leaves your device

You can verify this by checking your browser's network tab - there are no API calls when converting between JSON and TOON. This tool respects your privacy and works completely offline after the initial page load.

## 📖 What is TOON?

TOON (Token-Oriented Object Notation) is a compact and efficient format designed to pass structured data to Large Language Models with significantly reduced token usage (30-60% less than JSON).

### Example

**JSON:**
```json
{
  "users": [
    { "id": 1, "name": "Alice", "role": "admin" },
    { "id": 2, "name": "Bob", "role": "user" }
  ]
}
```

**TOON:**
```
users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deploy to GitHub Pages

1. Fork this repository or create a new one on GitHub

2. Update `astro.config.mjs` with your username and repository name:
   ```js
   site: 'https://YOUR_USERNAME.github.io',
   base: '/REPOSITORY_NAME',
   ```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Under "Source", select "GitHub Actions"

4. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically run when you push to the `main` branch

5. Your site will be available at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

## 📄 License

MIT License

## 🙏 Credits

- [@byjohann/toon](https://github.com/johannschopplich/toon) - TOON conversion library
- [Astro](https://astro.build) - Web framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
