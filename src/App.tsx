import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import "./App.css";

function App() {

  return (
    <>
      <TestimonialCard
        name="Sarah Dole"
        username="sarahdole"
        profileImg="/public/profile-thumbnail.png" // Place this inside `public/assets/`
        content="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
      />

      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by {' '}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>. Built by {' '}
        <a
          href="https://www.greatfrontend.com/projects/u/riazahmed0147"
          target="_blank"
        >Riaz Ahmed</a> .
      </div>
    </>
  );
}

export default App;
