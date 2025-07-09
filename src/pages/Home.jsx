// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // <>
    //   <h1>New York Times</h1>
    //   <h3>A React and NYT API project</h3>
    // </>
    <main className="home">
      <section className="home__hero">
        <h1 className="home__title">Welcome to NYT Reader</h1>
        <p className="home__subtitle">
          Explore the most popular New York Times articles in one place.
        </p>
        <Link to="/list" className="home__cta">
          View Today’s Top Stories
        </Link>
      </section>

      <section className="home__features">
        <article className="home__card">
          <h2>Browse Articles</h2>
          <p>See the most viewed, shared, and emailed stories.</p>
          <Link to="/list" className="home__link">
            Go →
          </Link>
        </article>

        <article className="home__card">
          <h2>Submit a Story</h2>
          <p>Create your own news entry.</p>
          <Link to="/form" className="home__link">
            Go →
          </Link>
        </article>
      </section>
    </main>
  );
};

export default Home;
