# AI-Assisted Evaluation for Pilot Monitoring Training in VR-Based Flight Simulators

This repository contains the project website for the CDE4301 Interim Report.

**Team:** Liu Yuhui (Ula) A0266685L, Wang Yubo, Zhang Yining (A0258906R), Gao Jiquan (A0258910B)  
**Affiliation:** Singapore Airlines – NUS Digital Aviation Corp Lab  
**Semester:** AY2025/26 Sem 1

## View the Website

The website is hosted on GitHub Pages: [https://[username].github.io/[repository-name]/](https://[username].github.io/[repository-name]/)

## Repository Structure

```
.
├── index.md          # Main content file with complete report
├── _config.yml       # Jekyll configuration
├── assets/           # Images, CSS, and other assets
│   └── images/       # Project images and figures
├── .gitignore        # Git ignore file
└── README.md         # This file
```

## Adding Images

To add the figures referenced in the report:

1. Place all figure images in the `assets/images/` directory
2. Name them according to the references in index.md:
   - figure3-1.png (Mapping of data collection with OBs)
   - figure4-1.png (Flowchart of VR Scenario Setup Process)
   - figure4-2.png (Flight Path and Implanted PM Events)
   - figure4-3.png (Example of Automatic Logging Output)
   - figure4-4.png (Example of Filtered Excel)
   - figure4-5.png (Sample of Filtered Speech Data)
   - figure4-6.png (Sample of Cleaned and Corrected Speech Data)
   - figure4-9.png (Cockpit Inward Vision and Element Segmentation)
   - figure4-10.png (Typical Samples of High-Frequency Bursts)
   - figure4-11.png (Typical Sample with Video of Data Missing Segments)
   - figure4-12.png (Pie Charts of Eye Gaze Log Entry Components)
   - figure4-13.png (Sample of Unmatched Entry–Exit Pairs)
   - figure5-1.png (Gantt Chart - Sem 2 first half)
   - figure5-2.png (Gantt Chart - Sem 2 second half)

## How to Edit

1. Edit the `index.md` file to update the content
2. Add images to the `assets/images/` directory
3. Update `_config.yml` to change the title and description
4. Commit and push changes to GitHub

## Local Development

To run this site locally:

```bash
# Install Jekyll
gem install bundler jekyll

# Serve the site
jekyll serve
```

Then visit `http://localhost:4000` in your browser.

## GitHub Pages Setup

1. Go to your repository Settings
2. Navigate to Pages section
3. Select the branch (usually `main` or `master`)
4. Select the root `/` directory
5. Click Save

Your site will be published at `https://[username].github.io/[repository-name]/`

## License

This project is part of the CDE4301 course at the National University of Singapore.

## Acknowledgments

- Template adapted from EDIC-NUS template
- Built with Jekyll and GitHub Pages
- Singapore Airlines – NUS Digital Aviation Corp Lab
