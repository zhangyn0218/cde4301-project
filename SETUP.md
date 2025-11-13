# Quick Setup Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `vr-pm-training` or `cde4301-project`)
4. Choose "Public" visibility
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Upload Your Files

### Option A: Using GitHub Web Interface (Easiest)

1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files from the `project-website` folder:
   - index.md
   - _config.yml
   - README.md
   - .gitignore
   - assets/ (entire folder)
3. Scroll down and click "Commit changes"

### Option B: Using Git Command Line

```bash
# Navigate to the project-website folder
cd project-website

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: VR PM Training project website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Add Your Images

1. Extract all 14 figures from your PDF report
2. Go to your repository on GitHub
3. Navigate to `assets/images/`
4. Click "Add file" → "Upload files"
5. Upload all figure images (figure3-1.png, figure4-1.png, etc.)
6. Commit the changes

See `assets/images/README.md` for the complete list of required images and extraction methods.

## Step 4: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** in the left sidebar
3. Under "Source", select:
   - Branch: **main** (or master)
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for GitHub to build your site

## Step 5: View Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

GitHub will show you the exact URL in the Pages settings.

## Troubleshooting

### Site not loading?
- Wait a few minutes after enabling Pages
- Check that all files are in the root directory (not in a subfolder)
- Ensure _config.yml and index.md are present

### Images not showing?
- Check that images are in `assets/images/` directory
- Verify filenames match exactly (case-sensitive)
- Clear your browser cache and reload

### Need to make changes?
- Edit files directly on GitHub (click the pencil icon)
- Or edit locally and push changes with git

## Next Steps

1. ✅ Review your website to ensure all content displays correctly
2. ✅ Add all figure images from your PDF
3. ✅ Share the link with your team and instructor
4. ✅ Make any necessary edits or updates

## Support

If you need help:
- Check GitHub Pages documentation: https://docs.github.com/en/pages
- Review Jekyll documentation: https://jekyllrb.com/docs/
- Ask your teaching assistant or instructor

---

**Note:** This website uses the Cayman theme which provides a clean, professional look suitable for academic projects. You can change the theme by editing `_config.yml` if desired.
