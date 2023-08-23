import services from "./services";
import about from "./about";
import team from "./team";
import testimonial from "./testimonial";
import blog from "./blog";
import graduates from "./graduates";
import contact from "./contact";
import hero from "./hero";

function App() {
  return (
    <>
      <div>
        {hero()}

      </div>
      <div>
        <div id="content-wrapper">
          {services()}

          {about()}

          {team()}

          {testimonial()}

          {blog()}

          {graduates()}

          {contact()}
        </div>
      </div>
    </>
  );
}

export default App;
