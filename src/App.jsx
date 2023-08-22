

function App() {
  return (
    <>
      <div>
        <div id="preloader" />
        <header
          className="navbar navbar-inverse navbar-fixed-top"
          role="banner"
        >
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
      <div>
        <div id="content-wrapper">
          <section id="services" className="white">
            <div className="container">
              <div className="gap" />
              <div className="row">
                <div className="col-md-12">
                  <div className="center gap fade-down section-heading">
                    <h2 className="main-title">Stuff We Do</h2>
                    <hr />
                    <h4>
                      Presently students are working on cutting-edge research in
                      the following areas
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <a href="images/portfolio/serious-games.png" rel="prettyPhoto"> */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-block">
                    <div className="pull-left bounce-in">
                      <i className="fa fa-gamepad fa fa-md" />
                    </div>
                    <div className="media-body fade-up">
                      <h3 className="media-heading">Serious Games</h3>
                      <p>
                        The serious games research focuses designing and
                        developing software &amp; hardware for visuo-motor
                        rehabilitation post stroke, spinal-cord injuries or any
                        motor related degeneration.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.col-md-4*/}
                {/* </a> */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-block">
                    <div className="pull-left bounce-in">
                      <i className="fa fa-coins fa fa-md" />
                    </div>
                    <div className="media-body fade-up">
                      <h3 className="media-heading">Neuroeconomics</h3>
                      <p>
                        Neuroeconomics research looks at risk-taking propensity
                        and decision-making skills in financial transactions.
                        In-house game applications are designed and developed,
                        in addition to applying traditional games.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.col-md-4*/}
                {/* </a> */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-block">
                    <div className="pull-left bounce-in">
                      <i className="fa fa-heart fa fa-md" />
                    </div>
                    <div className="media-body fade-up">
                      <h3 className="media-heading">Empathy</h3>
                      <p>
                        Objectification, empathy and violence on the female
                        population is being studied at the neural (brain
                        scanning) and behavioural (eye tracking, physiological)
                        level.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.col-md-4*/}
              </div>
              {/*/.row*/}
              {/* </a> */}
              <div className="gap" />
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="service-block">
                    <div className="pull-left bounce-in">
                      <i className="fa fa-brain fa fa-md" />
                    </div>
                    <div className="media-body fade-up">
                      <h3 className="media-heading">Fluid Intelligence</h3>
                      <p>
                        Analytical reasoning gauged from fluid intelligence
                        metrics and correlation to cognitive thinking styles is
                        being pursued with special focus on role of education
                        stream – STEM, fine arts, social sciences.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.col-md-4*/}
                {/* </a> */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-block">
                    <div className="pull-left bounce-in">
                      <i className="fa fa-palette fa fa-md" />
                    </div>
                    <div className="media-body fade-up">
                      <h3 className="media-heading">Colour Perception</h3>
                      <p>
                        Fundamental research on the visual system covers color
                        perception and human-eye sensitively to high glare with
                        focus on vehicle driver motor responses.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.col-md-4*/}
                {/* </a> */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-block">
                    <div className="pull-left bounce-in">
                      <i className="fa fa-eye fa fa-md" />
                    </div>
                    <div className="media-body fade-up">
                      <h3 className="media-heading">Eye Measurement Systems</h3>
                      <p>
                        Low cost compact system to measure a number of eye
                        related conditions - for example: amblyopia, strabismus,
                        Ametropia, pupillometry and color vision.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.col-md-4*/}
                {/* </a> */}
              </div>
              {/*/.row*/}
            </div>
          </section>
          <section id="about-us" className="divider-section">
            <div className="container">
              <div className="gap" />
              <div className="row">
                <div className="col-md-12">
                  <div className="center gap fade-down section-heading">
                    <h2 className="main-title">About Us</h2>
                    <hr />
                  </div>
                </div>
              </div>
             <br /> 
              <div className="row">
                <div className="col-md-10 col-md-offset-1 fade-up">
                  <h4>
                    The group works on a range of research topics, from
                    understanding cognitive processes to perception-based
                    engineering. The human understanding is derived and finds
                    applications in domains such as serious games, empathy,
                    neuroeconomics, (non)clinical assistive systems, urban
                    planning interfaces, human intelligence, visual system &amp;
                    color and design of sensors. Spanning fundamental research
                    to applied, the endeavor is to develop perceptive cognitive
                    systems for positive social impact.
                  </h4>
                  <br />
                  <h4>
                    Besides the research areas mentioned above, the group also
                    works on plasticity during stroke recovery, which is
                    analyzed using EEG technique and controlled motor actions.
                    Here, we are also testing the effectiveness of using serious
                    games for accelerating recover. While prior studies included
                    measuring the concept of ‘quiet-eye’ and strategy as applied
                    in badminton and carrom. Eye tracking was used to study
                    scan/gaze differences of professional players and amateurs.
                  </h4>
                </div>
                <div className="col-md-4 fade-up" />
              </div>
              <br />
              <br />
              <br />
              

              

              <div className="gap" />
            </div>
          </section>
          <section id="team" className="white">
            <div className="center gap fade-down section-heading">
              <h2 className="main-title">The Team</h2>
              <hr />
            </div>
            <div className="gap" />
            <div id="meet-the-team" className="row">
              <div className="col-md-2 col-xs-3" />
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/kavita.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Dr. Kavita Vemuri
                      <small className="role muted">Assistant Professor</small>
                    </h5>
                    <p>
                      Cognitive neuroscience of empathy, game design and
                      engineering, innovation and entrepreneurship, fiber optic
                      and liquid crystal devices for optical communications and
                      sensors, control systems
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Supreeth.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Supreeth Menon
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Spine Kinematics modelling with data collected using
                      Motion Capture system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/ayushi.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Ayushi Agarawal
                      <small className="role muted">Doctoral Researcher</small>
                    </h5>
                    <p>
                      The role of alcohol on cognitive control as applicable to
                      violence against women. Includes both behavioural and
                      neuroimaging studies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Pragati.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Pragati Gupta
                      <small className="role muted">Doctoral Researcher</small>
                    </h5>
                    <p>
                      Analyzing the gains from visuo-motor response training in
                      post-stroke using EMG and EEG measure of the paretic
                      muscle and motor parietal network
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-3" />
            </div>
            <div className="gap" />
            <div id="meet-the-team" className="row">
              <div className="col-md-2 col-xs-3" />
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/sudheshna.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Kanala Sudheshna
                      <small className="role muted">Postgrad Researcher</small>
                    </h5>
                    <p>
                      Exploring visual system and its relationship as a
                      neurobiomarker in neurodegenerative conditions through
                      pupillary responses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Amey.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Amey Kunte
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Researching the role of trust in economic behaviour using
                      behavioural economics experiments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Tanvi.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Tanvi Narsapur
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Understanding the evolution of trust, fairness and
                      altruism in children population
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/harshit.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Harshit Aggarwal
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Understanding the visual eye movements to identify central
                      and peripheral vision perception through pupillary
                      responses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-3" />
            </div>
            <div className="gap" />
            <div id="meet-the-team" className="row">
              <div className="col-md-2 col-xs-3" />
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Raghav.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Raghav Raj Dwivedi
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Correlations between personal financial behaviour and real
                      world geopolitics through game design
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Aarnav.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Aarnav Nagariya
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Behaviour of Two-Wheeler Indian Drivers on Urban Roads,
                      with Comparative Analysis between Experienced and Novice
                      drivers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Parth.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Parth Maradia
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>Cognitive Empathy towards Rape Victims</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Giri_Prasath.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Giri Prasath
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Kinship Recognition and Analysis using Eye Tracking
                      studies
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-3" />
            </div>
            <div className="gap" />
            <div id="meet-the-team" className="row">
              <div className="col-md-2 col-xs-3" />
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Aditya.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Aditya Kondai
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Analysis of effect of AI-based facial assessment tools on
                      self-confidence and finding relation between
                      self-confidence and self-objectification levels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/keerthi.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Keerthi Gouravarapu
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      EEG Analysis for finding patterns and abnormalities
                      between healthy and stroke patients
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/kunal.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Kunal Lahoti
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Understanding the effect of loss-framing in insurance
                      purchase decisions using a game-like interface
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Divyansh.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Divyansh Tiwari
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Biomechanics - spine/body kinematics using
                      marker/markerless motion capture
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-3" />
            </div>
            <div className="gap" />
            <div id="meet-the-team" className="row">
              <div className="col-md-2 col-xs-3" />
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Nandini.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Nandini Maroo
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      EEG Analysis for finding patterns and abnormalities
                      between healthy and stroke patients
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Nikunj.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Nikunj Nawal
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Understanding the effect of wavelength on refractive error
                      in young adults using pupillary responses
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/Vaibhaw.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      B Vaibhaw Kumar
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Using Eye-tracking to Study the Behaviour of Indian
                      Drivers on Urban Roads, with Comparative Analysis between
                      Experienced and Novice Drivers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src="images/team/prerak.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      Prerak Srivastava
                      <small className="role muted">Undergrad Researcher</small>
                    </h5>
                    <p>
                      Procedural Maze Generation for Education: Building an app
                      to allow educators educators to easily generate and
                      customize mazes and teach concepts through them
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-3" />
            </div>
            <div className="gap" />
          </section>
          <section id="testimonial-carousel" className="divider-section">
            <div className="gap" />
            <div className="container">
              <div className="row">
                <div className="center gap fade-down section-heading">
                  <h2 className="main-title">Collaborations and Funding</h2>
                  <hr />
                  <div className="gap" />
                </div>
                <div className="col-md-offset-2 col-md-8 fade-up">
                  <div
                    className="carousel slide"
                    data-ride="carousel"
                    id="quote-carousel"
                  >
                    {/* Bottom Carousel Indicators */}
                    <ol className="carousel-indicators">
                      <li
                        data-target="#quote-carousel"
                        data-slide-to={0}
                        className="active"
                      />
                      <li data-target="#quote-carousel" data-slide-to={1} />
                      <li data-target="#quote-carousel" data-slide-to={2} />
                      <li data-target="#quote-carousel" data-slide-to={3} />
                      <li data-target="#quote-carousel" data-slide-to={4} />
                      <li data-target="#quote-carousel" data-slide-to={5} />
                      <li data-target="#quote-carousel" data-slide-to={6} />
                    </ol>
                    {/* Carousel Slides / Quotes */}
                    <div className="carousel-inner">
                      {/* Quote 1 */}
                      <div className="item active">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-6 text-center">
                              <img
                                className="img-responsive"
                                src="images/logo/uon.png"
                                style={{ width: "200px", height: "200px" }}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p>
                                Colour Perception Lab,
                                <br />
                                University of Nevada, Reno
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* Quote 2 */}
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-6 text-center">
                              <img
                                className="img-responsive"
                                src="images/logo/uoh.png"
                                style={{ width: "200px", height: "200px" }}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p>
                                School of Medical Sciences, <br />
                                University of Hyderabad
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-6 text-center">
                              <img
                                className="img-responsive"
                                src="images/logo/iimb.jpg"
                                style={{ width: "200px", height: "200px" }}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p>
                                Behavioural Economics,
                                <br />
                                IIM, Bangalore
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* Quote 3 */}
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-6 text-center">
                              <img
                                className="img-responsive"
                                src="images/logo/dst.jpg"
                                style={{ width: "200px", height: "200px" }}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p>
                                Department of Science and Technology,
                                <br />
                                Government of India
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-6 text-center">
                              <img
                                className="img-responsive"
                                src="images/logo/dit.jpg"
                                style={{ width: "200px", height: "200px" }}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p>
                                Department of Information Technology,
                                <br />
                                Government of India
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-6 text-center">
                              <img
                                className="img-responsive"
                                src="images/logo/arc.jpg"
                                style={{ width: "200px", height: "200px" }}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p>
                                Anurag Rehabilitation Centre, <br />
                                Hyderabad
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-6 text-center">
                              <img
                                className="img-responsive"
                                src="images/logo/soujhe.jpg"
                                style={{ width: "200px", height: "200px" }}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p>
                                Technology Transfer to Startup,
                                <br />
                                Soujhe
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap" />
            </div>
          </section>
          <section id="blog" className="white">
            <div className="container">
              <div className="center gap fade-down section-heading">
                <div className="gap" />
                <h2 className="main-title">Our Publications</h2>
                <hr />
              </div>
              <div className="gap" />
              <div className="row">
                <div className="col-md-10 col-md-offset-1 fade-up">
                  <ol>
                    <li>
                      Mayank Agrawal, Kavita Vemuri. Analyzing High Decibel
                      Honking Effect on Driving Behavior Using VR and
                      Bio-Sensors. AutomotiveUI 2019
                    </li>
                    <li>
                      Sravya Vatsavayi, Priyanka Srivastava, Kavita Vemuri,
                      Analyzing Performance Differences in Artists and
                      Engineers- An RPM Study. Cognitive Science Society 2019,
                      poster presentation.
                    </li>
                    <li>
                      Sravya Vatsavayi, Kavita Vemuri, Analysing visual search
                      strategies in artists and engineers - An eye tracking
                      study on RPM, International Society for Intelligence
                      Research Conference, 2019.
                    </li>
                    <li>
                      Kara J. Emery, Courtney Matera, Vicki J. Volbrecht, David
                      H. Peterzell, Kavita Vemuri, Paul Kay, Michael A. Webster
                      , Categorical effects on color appearance. ICVS 2019.
                    </li>
                    <li>
                      Courtney Matera, Saksham Agrawal, Siddhart Srivatsav, Kara
                      J. Emery, Vicki J. Volbrecht, Kavita Vemuri, Paul Kay,
                      Michael A. Webster. A new angle on hue scaling. OSA Vision
                      2018, Reno Nevada.
                    </li>
                    <li>
                      Talia Retter, Siddhart Srivatsav, Kavita Vemuri, Michael
                      A. Webster. Sensitivity to the number of colors in an
                      ensemble. OSA Vision 2018, Reno, Nevada.
                    </li>
                    <li>
                      Mayank Agarwal, Kavita Vemuri. A Heterogeneous Traffic
                      Virtual-Reality Simulator to Study Irritation/Anger and
                      Driving Behaviour under Adverse Conditions. ACM British
                      HCI 2018. (Best Poster Award).
                    </li>
                    <li>
                      Rajat Singla, Raviraja Ganta and Kavita Vemuri. An
                      Exergame Themed on the Power of Religious Belief for
                      Stroke/Motor Rehabilitation. ACM British HCI 2018.
                    </li>
                    <li>
                      Kavita Vemuri, Akanksha Srivastava, Saksham Aggrwal,
                      Mithra Anand. Age, pupil size differences and color
                      choices for the “dress” and the “jacket”. JOSA A. 2018.
                    </li>
                    <li>
                      Nithiyashree Upara, Aditi Mavalankar, Kavita Vemuri. Eye
                      tracking in naturalistic badminton play — comparing visual
                      gaze pattern strategy in world-rank and amateur player.
                      ACM ETRA PETMEI 2018.
                    </li>
                    <li>
                      Dhriti Sayesh Goyal, Kavita Vemuri. Risk-taking in
                      Roulette Wheel – Exploring the Influence of Gender,
                      Education stream and Co-player. Foundations for Utility
                      and Risk, FUR 2018, University of York, UK.
                    </li>
                    <li>
                      Vivek Kaushal, Dhriti Sayesh Goyal, Kavita Vemuri.
                      Comparative study of risk-taking and academic performance.
                      Foundations for Utility and Risk, FUR 2018, University of
                      York, UK.
                    </li>
                    <li>
                      Shristi Dang, Arunima Ved, Kavita Vemuri (2017), Comparing
                      knowledge acquisition in jigsaw map puzzle game versus
                      self-study. European Conference on Game Based Learning,
                      2017, Graz, Austria.
                    </li>
                    <li>
                      Raviraja Ganta; Rohan Gupta; Rajat Singla; kavita Vemuri
                      (2017) “Power of Belief” - a game for neuro-motor
                      rehabilitation. 11th European Conference on Games Based
                      Learning (ECGBL17), Graz, Austria.
                    </li>
                    <li>
                      Nithiyasree Upara, Jahanavi Nukireddy, Kavita Vemuri. A
                      new test for pattern matching intelligence for school
                      children and performance analysis with academic grade
                      point. International Society for Intelligence Research
                      (ISIR) 2017, Montreal, Canada.
                    </li>
                    <li>
                      Mayank Agarwal &amp; Kavita Vemuri, Simulating and
                      analyzing chaos of Indian Traffic Condition, 18th IRF
                      World Road Meet 2017, New Delhi , India.
                    </li>
                    <li>
                      Rohan Bhatial &amp; Kavita Vemuri, Effect of Highbeam
                      glare on driver response time. 18th IRF World Road Meet
                      2017, New Delhi , India .
                    </li>
                    <li>
                      Vemuri K, Surampudi BR. 2015. Evidence of stimulus
                      correlated empathy modes - Group ICA of fMRI data. Brain
                      and Cogn. 94:32-43
                    </li>
                    <li>
                      Vemuri K., Surampudi BR. 2015. An exploratory
                      investigation of functional network connectivity of
                      empathy and default mode networks in a free-viewing task.
                      Brain Connect. Aug;5(6):384-400
                    </li>
                    <li>
                      Vemuri K, Bisla K., Mulpuru S, Varadarajan S. Does normal
                      pupil diameter differences in population underlie the
                      color selection of the #dress?. JOSA A ,Vol. 33, No. 3 /
                      March 2016
                    </li>
                    <li>
                      Kukar D., Vemuri,K.(2015) Investigating human visual
                      search/cognition strategy in kinship matching – face
                      matching experiment. 3rd International Conference on
                      Cognition, Brain and Computation, IIT Gandhinagar, India.
                    </li>
                    <li>
                      Aditi Mavalankar, Snigdha Dagar, Kavita Vemuri. Decoding
                      (un)known opponents game play, a real-life badminton eye
                      tracking study. EAPCogsci 2015. Full paper.
                    </li>
                    <li>
                      SaiKrishna Mulpuru and Kavita Vemuri. Tracking pedestrain
                      in highbeam condition – a visual sensitivity as a function
                      of pupil dilation analysis. ECVP 2015.
                    </li>
                    <li>
                      Rajat Singla, Junaid Ahmed, Abhishek Aggarwal, Divya
                      Kukkar, Rajendra Kumar, Kavita Vemuri.(2016) Intelligent
                      games and sensor feedback interface for
                      neuro-rehabilitation therapy. WCNR 2016, Philadelphia, USA
                    </li>
                    <li>
                      Jasmine Bhanushali, Sai Parthasarathy Miduthuri, Kavita
                      Vemuri. A dome-shaped interface embedded with low-cost
                      infrared sensors for car-game control by gesture
                      recognition. Oral presentation. HCI International 2015.
                      Los Angeles.
                    </li>
                    <li>
                      Abhishek Agarwal, Divya Kukkar, Junaid Ahmed, Rajat
                      Singla, Kavita Vemuri . A game for inducing movement of
                      the stroke affected arm based on the mirror-box concept.
                      ECONS Neurogamng 2015, Los Angeles.
                    </li>
                    <li>
                      Drithi Goyal, Kavita Vemuri. Preliminary comparative
                      analysis of activations due to controlled deep-breathing
                      and resting-state in regions covered by major arteries – a
                      fMRI study.CBC 2015, IITG, India.
                    </li>
                    <li>
                      Vemuri, K., Poplin, A. and Monachesi, P. 2014.
                      YouPlaceIt!: a Serious Digital Game for Achieving
                      Consensus in Urban Planning 17th AGILE Conference on
                      Geographic Information Science (AGILE 2014), Spain.
                    </li>
                    <li>
                      Niyati Mishra, Vamshi Velagapuri, and Kavita Vemuri.
                      Visuo-spatial recall and reproduction of geometrical
                      shapes and math equations as a function of presentation
                      style – static, block and animation. Poster at ACCS 2014,
                      IIT Kanpur.
                    </li>
                    <li>
                      Kavita Vemuri. Analyzing ‘The Omen’: the child is evil but
                      quantum of punishment is debatable. SCMI 2013.
                    </li>
                    <li>
                      Kavita Vemuri. Estimating the functional networks from
                      sudden respiratory changes – a fMRI Group ICA method
                      study. 2012. Medimage 2012, Mumbai.
                    </li>
                  </ol>
                </div>
                <div className="col-md-4 fade-up" />
              </div>
            </div>
          </section>
          <section id="graduates" className="divider-section">
            <div className="container">
              <div className="gap" />
              <div className="row">
                <div className="col-md-12">
                  <div className="center gap fade-down section-heading">
                    <h2 className="main-title">Our Graduates</h2>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <table className="table" border={2}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Thesis Topic</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dhriti Goyal</td>
                          <td>
                            Decision Making under Risk: studied using gambling
                            games
                          </td>
                        </tr>
                        <tr>
                          <td>Nikita Sharma</td>
                          <td>
                            Empathy-related response towards faces of female
                            rape victims - An fMRI study.
                          </td>
                        </tr>
                        <tr>
                          <td>Arhant Jain</td>
                          <td>
                            Decoding self-automated and motivated Finger
                            Movements using Novel Single-Frequency Filtering
                            method - an EEG study
                          </td>
                        </tr>
                        <tr>
                          <td>Rajat Singla</td>
                          <td>
                            Neurogaming - Designing Human System Interfaces for
                            Rehabilitation
                          </td>
                        </tr>
                        <tr>
                          <td>Mayank Agrawal</td>
                          <td>
                            Studying the effects of traffic noise and lane
                            system on driver behavior in heterogeneous traffic
                            using VR and physiological measurements
                          </td>
                        </tr>
                        <tr>
                          <td>Vivek Kaushal</td>
                          <td>
                            Clickbait - Credibility, Visual Attention,
                            Propensity and Proliferation
                          </td>
                        </tr>
                        <tr>
                          <td>Srinivas Vuddagiri</td>
                          <td>
                            VR-Phore: A Novel Virtual Reality system for
                            diagnosis and therapeutics of Binocular Vision
                          </td>
                        </tr>
                        <tr>
                          <td>Shubhangi Gautam</td>
                          <td>
                            Investigating Differences in the Default Mode
                            Network in Empathy-Related Stimuli
                          </td>
                        </tr>
                        <tr>
                          <td>Mohit Goel</td>
                          <td>
                            Modulation of empathy-related response towards
                            profession of female rape victims
                          </td>
                        </tr>
                        <tr>
                          <td>Supreeth Karan</td>
                          <td>
                            EEG Microstates analysis of tip-pinch and wrist
                            flexion/extension movement
                          </td>
                        </tr>
                        <tr>
                          <td>Harsh Sharma</td>
                          <td>Spine Kinematics</td>
                        </tr>
                        <tr>
                          <td>Sravya Vatsavayi</td>
                          <td>
                            Analysing differential solution approaches as
                            applied by fine art and engineering students - A
                            fluid intelligence study
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="white">
            <div className="container">
              <div className="center fade-down section-heading">
                <h2 className="main-title">Get In Touch</h2>
                <hr />
              </div>
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4 fade-up text-center">
                  <p>
                    <span className="icon icon-home" />
                    B5, Vindhya, IIIT Hyderabad, India
                    <br />
                    <span className="icon icon-envelop" />
                    <a href="#">kvemuri@iiit.ac.in</a> <br />
                    <span className="icon icon-twitter" />
                    <a href="#">+91 40 6653 1000</a> <br />
                  </p>
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
