import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
      <h1>Page Not Found</h1>
      <p>
        Suggestion: navigate back to the <Link to="/">HomePage</Link> and
        continue on with your awesome life!
      </p>
    </section>
  );
};

export default NotFoundPage;
