const hero = () => {
  return (
    <div>
      <div id="preloader" />
      <header className="navbar navbar-inverse navbar-fixed-top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-bars" />
            </button>
            {/* <span class="pe-7s-gleam bounce-in"></span> */}
            <a className="navbar-brand" href="#main-slider">
              <h1>P.E.G. | IIIT-H</h1>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#services">Stuff We Do</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#meet-the-team">The Team</a>
              </li>
              <li>
                <a href="#testimonial-carousel">Collaborations</a>
              </li>
              <li>
                <a href="#blog">Publications</a>
              </li>
              <li>
                <a href="#graduates">Graduates</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/*/header*/}
      <section id="main-slider" className="no-margin">
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="carousel-content center centered">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <h2 className="boxed animation animated-item-1 fade-down">
                        Perception Engineering Group
                      </h2>
                      <h4 className="boxed animation animated-item-2 fade-up">
                        Cognitive Sciences Laboratory, IIIT Hyderabad
                      </h4>
                      <br />
                      <a
                        className="btn btn-md animation bounce-in"
                        href="#services"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.item*/}
          </div>
          {/*/.carousel-inner*/}
        </div>
        {/*/.carousel*/}
      </section>
      {/*/#main-slider*/}
    </div>
  );
};

export default hero;
