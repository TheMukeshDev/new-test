# My Awesome Web App

A simple, modern web application with GitHub Actions CI/CD pipeline for automated linting and deployment.

## Features

✨ **Clean HTML/CSS/JS** - No frameworks, just pure web technologies  
🚀 **Automated Deployment** - Deploys to GitHub Pages on every push to main  
🔍 **Code Linting** - ESLint checks your code before deployment  
📱 **Responsive Design** - Works perfectly on all devices  

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── app.js             # JavaScript functionality
├── package.json       # NPM dependencies and scripts
├── .eslintrc.json     # ESLint configuration
├── .github/
│   └── workflows/
│       ├── lint.yml   # Linting workflow
│       └── deploy.yml # Deployment workflow
└── README.md          # This file
```

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-awesome-webapp.git
   cd my-awesome-webapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run linter:**
   ```bash
   npm run lint
   ```

4. **Fix linting errors automatically:**
   ```bash
   npm run lint:fix
   ```

5. **View the site locally:**
   - Open `index.html` in your browser, or
   - Use a local server: `npx http-server`

## GitHub Actions Workflows

### 🔍 Lint Workflow (`.github/workflows/lint.yml`)
- **Triggers:** On every push and pull request
- **What it does:** Runs ESLint to check for code quality issues
- **Status:** Must pass before deployment

### 🚀 Deploy Workflow (`.github/workflows/deploy.yml`)
- **Triggers:** On push to main branch (after lint passes)
- **What it does:** Builds and deploys to GitHub Pages
- **Result:** Your site goes live automatically!

## How It Works

```
git push to main
        ↓
  GitHub Actions triggered
        ↓
  Lint workflow runs (ESLint)
        ↓
  If lint passes → Deploy workflow runs
        ↓
  Site deployed to GitHub Pages
        ↓
  🎉 Live on the web!
```

## Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages"
3. Select "GitHub Actions" as the source
4. Your site will be available at: `https://YOUR_USERNAME.github.io/my-awesome-webapp/`

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No dependencies
- **ESLint** - Code quality linting
- **GitHub Actions** - CI/CD automation
- **GitHub Pages** - Free hosting

## Making Changes

1. Make your changes locally
2. Test them by opening `index.html`
3. Commit your changes: `git commit -m "Your message"`
4. Push to main: `git push origin main`
5. GitHub Actions will automatically lint and deploy!

## Troubleshooting

### Linting fails
Run `npm run lint:fix` to automatically fix issues, then commit and push again.

### Pages not deploying
- Ensure GitHub Pages is enabled in Settings → Pages
- Check the Actions tab for workflow errors
- Verify main branch has all your files

### Changes not showing live
- Wait a few seconds for the deployment to complete
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the Actions tab to confirm deployment succeeded

## Contributing

Feel free to fork, modify, and use this as a template for your own projects!

## License

MIT License - Use freely!

---

**Happy coding!** 🚀

