function AboutPage() {
  return (
    <main>
      <section className="content-card">
        <p className="section-eyebrow">About</p>

        <h1 className="page-title">
          Junior MERN Stack Developer with a medical background.
        </h1>

        <p>
          I am focused on building practical full-stack JavaScript applications
          with React, Node.js, Express and MongoDB.
        </p>

        <p>
          Before moving into software development, I trained and worked as a
          medical doctor. That background shaped how I approach responsibility,
          pressure, documentation and careful decision-making.
        </p>

        <p>
          I now apply that discipline to software projects by building,
          improving, documenting and deploying applications that can be reviewed
          through live links and GitHub repositories.
        </p>
      </section>

      <section className="content-card">
        <h2 className="content-title">Current focus</h2>

        <div className="focus-grid">
          <div>MERN stack development</div>
          <div>React frontend development</div>
          <div>Node.js and Express backends</div>
          <div>MongoDB and Mongoose</div>
          <div>Java and SQL fundamentals</div>
          <div>Docker and Render deployment</div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;