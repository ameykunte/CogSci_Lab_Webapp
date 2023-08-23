const testimonial = () => {
  return (
    <div>
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
    </div>
  );
};

export default testimonial;
