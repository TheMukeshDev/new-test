# GitHub Setup Instructions

This guide will help you push this project to GitHub and enable automated CI/CD.

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Enter repository name: `my-awesome-webapp`
4. Choose **Public** (so GitHub Pages works)
5. DO NOT initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Connect Your Local Repository

After creating the repository, GitHub will show you commands to run. Execute these in your terminal:

```bash
cd c:\Users\mukes\Downloads\new-test

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/my-awesome-webapp.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select **GitHub Actions** (or "Deploy from a branch" → select "main" branch)
5. Save changes

## Step 4: Watch GitHub Actions

1. Go to the **Actions** tab in your repository
2. You should see the workflows running:
   - ✅ Lint Code workflow runs first
   - ✅ Deploy workflow runs after successful lint
3. Once green checkmarks appear, your site is live!

## Step 5: View Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/my-awesome-webapp/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Making Changes

Now that it's set up, the workflow is automatic:

```bash
# Make changes to files
# Then commit and push
git add .
git commit -m "Your change description"
git push origin main
```

GitHub Actions will automatically:
1. Run ESLint to check for errors
2. If lint passes, deploy to GitHub Pages
3. Your changes go live! 🚀

## Troubleshooting

### "Remote already exists"
If you get this error when adding remote:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/my-awesome-webapp.git
```

### "Permission denied" when pushing
Make sure you've:
1. Generated a GitHub SSH key or personal access token
2. Configured git credentials on your system

### Pages not updating
1. Check the **Actions** tab - make sure workflows completed successfully
2. Wait 1-2 minutes for GitHub to deploy
3. Hard refresh your browser (Ctrl+Shift+R)

### ESLint failing
Run locally to fix errors:
```bash
npm install
npm run lint:fix
git add .
git commit -m "Fix linting errors"
git push origin main
```

## Next Steps

- Customize `index.html` with your own content
- Update colors in `styles.css`
- Add more functionality in `app.js`
- Every push to main triggers automatic deployment!

---

**Questions?** Check the main [README.md](README.md) for more details.
