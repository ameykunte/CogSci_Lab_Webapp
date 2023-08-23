const contact = () => {
  return (
    <div>
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
  );
};

export default contact;
