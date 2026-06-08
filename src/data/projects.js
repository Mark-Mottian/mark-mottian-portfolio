export const projects = [
  {
    slug: "markitdone",
    title: "MarkItDone",
    category: "MERN stack project",
    stackSignal:
      "React, Node.js, Express, MongoDB, JWT, Nodemailer, Docker, Render",
    oneLiner:
      "A task management app with authentication, email verification, protected routes and deployment.",
    liveUrl: "https://markitdone.onrender.com",
    githubUrl: "https://github.com/Mark-Mottian/markitdone",
    image: "/media/markitdone/dashboard.png",
    heroImage: "/media/markitdone/home-page.png",
    video: "/media/markitdone/mark-it-done-demo.mp4",
    role: "Full-stack developer",
    status: "Live on Render",
    focus: "Authentication, task flows, email and deployment",
    techStack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "Docker",
      "Render",
    ],
    cardHighlights: [
      "User registration, login and protected dashboard routes",
      "Email verification and password reset flows",
      "Dockerised app deployed on Render",
    ],
    details: [
      "JWT authentication with HTTP-only cookies",
      "Email verification and password reset",
      "Task dashboard with progress tracking",
      "React frontend served from Express in production",
      "Dockerised and deployed on Render",
    ],
    overview:
      "MarkItDone is a full-stack productivity app built around a simple task workflow. Users can create an account, verify their email, reset their password and manage saved tasks from a protected dashboard.",
    value:
      "This project connects frontend state, backend routes, database models, authentication, email flows and deployment into one working product.",
    technicalDecisions: [
      {
        title: "Single-service deployment",
        description:
          "The React frontend builds into a production folder and is served by the Express backend. This keeps the app under one live URL.",
      },
      {
        title: "HTTP-only cookie authentication",
        description:
          "JWTs are stored in HTTP-only cookies instead of localStorage. This keeps authentication cleaner on the frontend.",
      },
      {
        title: "Public tasks before signup",
        description:
          "Users can try the task feature before creating an account. After signup, they can import local tasks into their dashboard.",
      },
    ],
    challenges: [
      {
        title: "Local tasks and account tasks",
        description:
          "The app needed a clear flow for users who start with local tasks and later move into an authenticated dashboard.",
      },
      {
        title: "Authentication structure",
        description:
          "Authentication logic was separated across routes, controllers, middleware and frontend context.",
      },
    ],
    nextSteps:
      "I would add automated tests, improve dashboard filtering and continue refining the task workflow from user feedback.",
    screenshots: [
      {
        src: "/media/markitdone/home-page.png",
        alt: "MarkItDone home page",
        caption: "Public home page with local task entry.",
      },
      {
        src: "/media/markitdone/login-page.png",
        alt: "MarkItDone login page",
        caption: "Login page with branding and form validation.",
      },
      {
        src: "/media/markitdone/dashboard.png",
        alt: "MarkItDone dashboard",
        caption: "Dashboard with saved tasks, progress tracking and task actions.",
      },
      {
        src: "/media/markitdone/task-import.png",
        alt: "MarkItDone task import",
        caption: "Import flow for moving local tasks into the account dashboard.",
      },
      {
        src: "/media/markitdone/mobile-dashboard.png",
        alt: "MarkItDone mobile dashboard",
        caption: "Responsive dashboard layout on mobile.",
      },
    ],
  },
  {
    slug: "poise-pms",
    title: "PoisePMS",
    category: "Java and SQL project",
    stackSignal: "Java, JDBC, MariaDB, SQL, Docker Compose, Javadoc",
    oneLiner:
      "A Java and MariaDB console app for managing construction projects and linked stakeholders.",
    githubUrl: "https://github.com/Mark-Mottian/poise-pms-java-sql",
    image: "/media/poise-pms/view-all-projects.png",
    heroImage: "/media/poise-pms/main-menu.png",
    video: "/media/poise-pms/poise-pms-demo.mp4",
    role: "Java database developer",
    status: "Documented GitHub project",
    focus: "JDBC, SQL, relational design and database setup",
    techStack: [
      "Java",
      "JDBC",
      "MariaDB",
      "SQL",
      "Docker Compose",
      "Eclipse",
      "Javadoc",
      "Git",
    ],
    cardHighlights: [
      "Java console app connected to MariaDB with JDBC",
      "Relational schema with linked project and person records",
      "SQL setup files and Docker Compose database setup",
    ],
    details: [
      "Java console app using JDBC",
      "MariaDB schema with foreign-key relationships",
      "SQL schema and seed files",
      "Javadoc documentation",
      "Docker Compose setup for MariaDB",
    ],
    overview:
      "PoisePMS is a Java and MariaDB project management system for construction project records. It stores project data in relational tables and links each project to customers, architects, contractors, engineers and project managers.",
    value:
      "This project shows database fundamentals outside a JavaScript stack. It demonstrates SQL structure, JDBC access, prepared statements, relational design and repeatable database setup.",
    technicalDecisions: [
      {
        title: "Relational database design",
        description:
          "Project records are stored separately from customer, architect, contractor, structural engineer and project manager records, then linked through ID fields.",
      },
      {
        title: "Console app focus",
        description:
          "The project stays as a console application so the focus remains on Java database programming, JDBC and relational data.",
      },
      {
        title: "Rebuildable database setup",
        description:
          "Schema and seed files allow the database to be recreated from scratch without manual table setup.",
      },
      {
        title: "Docker Compose for MariaDB",
        description:
          "The database can run in a container, making the project easier to test and review.",
      },
    ],
    challenges: [
      {
        title: "Keeping relationships clear",
        description:
          "Projects are linked to multiple people tables through foreign keys instead of duplicating person data.",
      },
      {
        title: "Making setup easier",
        description:
          "SQL setup files and Docker Compose make the repo easier to rebuild.",
      },
    ],
    nextSteps:
      "I would convert the project to Maven or Gradle, add automated tests and later rebuild it as a small Spring Boot API.",
    screenshots: [
      {
        src: "/media/poise-pms/erd-diagram.jpg",
        alt: "PoisePMS ERD diagram",
        caption:
          "Entity relationship diagram showing the linked project and stakeholder tables.",
      },
      {
        src: "/media/poise-pms/database-tables.png",
        alt: "PoisePMS database tables",
        caption: "MariaDB tables used by the project.",
      },
      {
        src: "/media/poise-pms/main-menu.png",
        alt: "PoisePMS main menu",
        caption: "Console menu for project and person actions.",
      },
      {
        src: "/media/poise-pms/view-all-projects.png",
        alt: "PoisePMS project output",
        caption: "Project view showing linked people and project details.",
      },
    ],
  },
  {
    slug: "itunes-search-favourites",
    title: "iTunes Search Favourites",
    category: "React and Express API project",
    stackSignal:
      "React, Express, Node.js, REST API, JWT, Formik, Docker, Render",
    oneLiner:
      "A React and Express app for searching the iTunes API and saving favourites locally.",
    liveUrl: "https://itunes-search-favourites.onrender.com",
    githubUrl: "https://github.com/Mark-Mottian/itunes-search-favourites",
    image: "/media/itunes-search-favourites/search-results.png",
    heroImage: "/media/itunes-search-favourites/search-results.png",
    video: "/media/itunes-search-favourites/itunes-search-favourites-demo.mp4",
    role: "Full-stack JavaScript developer",
    status: "Live on Render",
    focus: "API integration, validation, middleware and deployment",
    techStack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Express",
      "Node.js",
      "Axios",
      "JWT",
      "Formik",
      "localStorage",
      "Docker",
      "Render",
    ],
    cardHighlights: [
      "React frontend connected to an Express backend",
      "Search flow using the iTunes Search API",
      "JWT middleware, Formik validation and Render deployment",
    ],
    details: [
      "React frontend connected to Express",
      "iTunes Search API integration",
      "JWT-protected backend route",
      "Formik validation",
      "Dockerised Render deployment",
    ],
    overview:
      "iTunes Search Favourites lets users search the iTunes Store and Apple Books, filter by media type and save favourite results locally.",
    value:
      "This project shows a complete frontend to backend to external API request flow. It also shows validation, middleware, local persistence, Docker and production deployment.",
    technicalDecisions: [
      {
        title: "Express as an API middle layer",
        description:
          "The frontend sends search requests to Express. Express calls the iTunes API, cleans the response and returns the data to React.",
      },
      {
        title: "JWT-protected search route",
        description:
          "The frontend requests an app-level token before calling the protected search endpoint.",
      },
      {
        title: "localStorage for favourites",
        description:
          "Favourites persist after refresh without adding unnecessary database complexity to a small API project.",
      },
    ],
    challenges: [
      {
        title: "Production setup",
        description:
          "In production, Express serves the built React frontend from one Render service.",
      },
      {
        title: "Docker build issue",
        description:
          "The backend lock file had old registry URLs. Regenerating the lock file fixed the Docker build.",
      },
    ],
    nextSteps:
      "I would add user accounts, save favourites to a database and add automated tests for the backend route and frontend validation.",
    screenshots: [
      {
        src: "/media/itunes-search-favourites/home-page.png",
        alt: "iTunes Search Favourites home page",
        caption: "Initial search page with empty results and favourites sections.",
      },
      {
        src: "/media/itunes-search-favourites/search-results.png",
        alt: "iTunes Search Favourites search results",
        caption: "Search results from the iTunes Search API.",
      },
      {
        src: "/media/itunes-search-favourites/favourites-validation.png",
        alt: "iTunes Search Favourites validation",
        caption: "Validation message with a saved favourite restored from localStorage.",
      },
    ],
  },
];