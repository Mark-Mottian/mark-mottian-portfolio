# Mark Mottian Portfolio

Personal developer portfolio for Mark Mottian, a Junior MERN Stack Developer based in Bedfordview, Gauteng.

Live site: https://mark-mottian-portfolio.onrender.com

## Overview

This portfolio presents my selected software development work, technical skills, CV, GitHub profile and LinkedIn profile.

The site is designed to be simple, readable and project-focused. It highlights completed work with live demos, GitHub repositories, screenshots, demo videos and case studies.

## Featured projects

### MarkItDone

Full-stack MERN task management app with user authentication, email verification, password reset, protected routes, account deletion and Render deployment.

Live demo: https://markitdone.onrender.com
GitHub: https://github.com/Mark-Mottian/markitdone

### iTunes Search Favourites

React and Express app that searches the iTunes Search API through a backend proxy, validates searches and saves favourites locally.

Live demo: https://itunes-search-favourites.onrender.com
GitHub: https://github.com/Mark-Mottian/itunes-search-favourites

### PoisePMS

Java and MariaDB project management system using JDBC, SQL relationships, prepared statements, Docker Compose and Javadoc documentation.

GitHub: https://github.com/Mark-Mottian/poise-pms-java-sql

## Tech stack

* React
* JavaScript
* Vite
* React Router
* React Bootstrap
* CSS
* Render

## Features

* Responsive portfolio layout
* Project cards with live demo, GitHub and case study links
* Individual project case study pages
* Demo videos and screenshots
* Sidebar navigation
* Contact page with email, GitHub, LinkedIn and resume links
* Resume PDF served from the public folder
* React Router scroll-to-top behavior
* Render static site deployment with rewrite support for frontend routes

## Local setup

Clone the repository:

```bash
git clone https://github.com/Mark-Mottian/mark-mottian-portfolio.git
```

Move into the project folder:

```bash
cd mark-mottian-portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

## Deployment

This portfolio is deployed on Render as a Static Site.

Render settings:

```text
Build Command: npm install; npm run build
Publish Directory: dist
```

React Router rewrite rule:

```text
Source: /*
Destination: /index.html
Action: Rewrite
```

## Contact

- Email: [mark.mottian@gmail.com](mailto:mark.mottian@gmail.com)
- GitHub: [github.com/Mark-Mottian](https://github.com/Mark-Mottian)
- LinkedIn: [linkedin.com/in/mark-mottian](https://www.linkedin.com/in/mark-mottian)
- Portfolio: [mark-mottian-portfolio.onrender.com](https://mark-mottian-portfolio.onrender.com)
