<div align="center">
  <img src='./public/previews/combined_preview.png' width='720' />
  <br /><br />

  <h1 align="center">My Personal Website</h1>

  A personal website is a pretty important thing to have as a software engineer, so I wanted to put something together that would match what I envision and want in a personal website &mdash; an outlet for me to describe myself and the things that I've worked on, while occasionally dumping my brain in a blog article or two.

  It comes with beautiful gradients, outstanding typography, mobile responsiveness, and a small personal touch with a nice Pokemon decal; what more could I possibly want?

  If you're interested in using this repository as a template, please consider forking it and leaving a star.

  <img src='https://img.shields.io/github/issues/Thangta03/Portfolio?style=for-the-badge&logo=appveyor' />
  <img src='https://img.shields.io/github/forks/Thangta03/Portfolio?style=for-the-badge&logo=appveyor' />
  <img src='https://img.shields.io/github/stars/Thangta03/Portfolio?style=for-the-badge&logo=appveyor' />
  <img src='https://img.shields.io/github/license/Thangta03/Portfolio?style=for-the-badge&logo=appveyor' />
  <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FThangta03%Portfolio">
    <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FThangta03%Portfolio&countColor=%2337d67a" />
  </a>


# Table of Contents
- [Table of Contents](#table-of-contents)
- [Screenshots](#screenshots)
- [About The Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Updating To Fit Your Information](#updating-to-fit-your-information)
  - [Error Handling in Workflow](#error-handling-in-workflow)
- [License](#license)



# Screenshots
<div align="center">
  <details>
    <summary>Desktop Previews</summary>
    <img src="./public/previews/desktop/light_home.png" width='720' />
    <img src="./public/previews/desktop/dark_home.png" width='720' />
    <img src="./public/previews/desktop/light_about.png" width='720' />
    <img src="./public/previews/desktop/dark_about.png" width='720' />
    <img src="./public/previews/desktop/light_articles.png" width='720' />
    <img src="./public/previews/desktop/dark_articles.png" width='720' />
    <img src="./public/previews/desktop/light_experience.png" width='720' />
    <img src="./public/previews/desktop/dark_experience.png" width='720' />
    <img src="./public/previews/desktop/light_projects.png" width='720' />
    <img src="./public/previews/desktop/dark_projects.png" width='720' />
  </details>

  <br />

  <details>
    <summary>Mobile Previews</summary>
    <img src="./public/previews/mobile/light_home.png" width='300' />
    <img src="./public/previews/mobile/dark_home.png" width='300' />
    <img src="./public/previews/mobile/light_about.png" width='300' />
    <img src="./public/previews/mobile/dark_about.png" width='300' />
    <img src="./public/previews/mobile/light_articles.png" width='300' />
    <img src="./public/previews/mobile/dark_articles.png" width='300' />
    <img src="./public/previews/mobile/light_experience.png" width='300' />
    <img src="./public/previews/mobile/dark_experience.png" width='300' />
    <img src="./public/previews/mobile/light_projects.png" width='300' />
    <img src="./public/previews/mobile/dark_projects.png" width='300' />
  </details>
</div>



# About The Project
## Tech Stack
- TypeScript
- Astro
- Tailwind

## Features
- Responsive mobile-first layout
- Toggleable light and dark mode
- Individual pages for all of your content needs
- Automatically updating RSS feed based on your articles
- A sick Absol and Shiny Absol decal in the corner of every page
- Easily readable and expandable code base for feature development and refinement

## Updating To Fit Your Information
I tried to keep page information as modular as I possibly could. Updating your name, occupation, etc. is as easy as opening the [dedicated config]() file and adjusting the information accordingly. This will handle almost everything for you, which is fantastic.

What it *doesn't* handle though, is the content on the *About* page, which is currently manually written. It's easy enough to update that stuff to your liking; just open the page in your editor of choice and go from there.

Updating your work history, open source contributions, and project list is extremely easy as well. Add a Markdown file into any one of the three `src/content` folders, add the frontmatter and content of the file, and it'll automatically be found and displayed on your website. Adding a blog article is just as easy, which is wonderful.
If you get confused on what your Markdown files should have, you can check out and use my existing files as a reference.

## Error Handling in Workflow
The workflow file `.github/workflows/deploy.yml` now includes error handling for the installation process using `pnpm`. This ensures that any issues during the installation process are properly handled, preventing the workflow from failing unexpectedly.

To run the workflow with the new error handling, follow these steps:
1. Ensure you have the latest version of `pnpm` installed.
2. Update your workflow file to include the error handling steps.
3. Trigger the workflow by pushing changes to the `main` branch or manually dispatching the workflow.

For more details, refer to the `.github/workflows/deploy.yml` file in this repository.

Additionally, the workflow now includes a step to upload the built site to GitHub Pages. This ensures that your site is automatically deployed to GitHub Pages after a successful build.

To run the workflow with the new deployment step, follow these steps:
1. Ensure you have the latest version of `pnpm` installed.
2. Update your workflow file to include the deployment step.
3. Trigger the workflow by pushing changes to the `main` branch or manually dispatching the workflow.

For more details, refer to the `.github/workflows/deploy.yml` file in this repository.



# License
Licensed under GNU GPL 3.

For more information, check out [LICENSE](LICENSE).
