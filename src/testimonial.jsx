import React from 'react';

const TestimonialItem = ({ imgSrc, imgAlt, organization }) => (
  <div className="item">
    <blockquote>
      <div className="row">
        <div className="col-sm-6 text-center">
          <img className="img-responsive" src={imgSrc} alt={imgAlt} style={{ width: "200px", height: "200px" }} />
        </div>
        <div className="col-sm-6">
          <p>{organization}</p>
        </div>
      </div>
    </blockquote>
  </div>
);

const Testimonial = () => (
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
            <div className="carousel slide" data-ride="carousel" id="quote-carousel">
              {/* Bottom Carousel Indicators */}
              <ol className="carousel-indicators">
                {testimonialData.map((item, index) => (
                  <li
                    key={index}
                    data-target="#quote-carousel"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  />
                ))}
              </ol>
              {/* Carousel Slides / Quotes */}
              <div className="carousel-inner">
                {testimonialData.map((item, index) => (
                  <TestimonialItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="gap" />
      </div>
    </section>
  </div>
);

const testimonialData = [
  {
    imgSrc: "images/logo/uon.png",
    imgAlt: "University of Nevada, Reno",
    organization: "Colour Perception Lab, University of Nevada, Reno",
  },
  {
    imgSrc: "images/logo/uoh.png",
    imgAlt: "University of Hyderabad",
    organization: "School of Medical Sciences, University of Hyderabad",
  },
  {
    imgSrc: "images/logo/iimb.jpg",
    imgAlt: "IIM, Bangalore",
    organization: "Behavioural Economics, IIM, Bangalore",
  },
  {
    imgSrc: "images/logo/dst.jpg",
    imgAlt: "Department of Science and Technology, Government of India",
    organization: "Department of Science and Technology, Government of India",
  },
  {
    imgSrc: "images/logo/dit.jpg",
    imgAlt: "Department of Information Technology, Government of India",
    organization: "Department of Information Technology, Government of India",
  },
  {
    imgSrc: "images/logo/arc.jpg",
    imgAlt: "Anurag Rehabilitation Centre, Hyderabad",
    organization: "Anurag Rehabilitation Centre, Hyderabad",
  },
  {
    imgSrc: "images/logo/soujhe.jpg",
    imgAlt: "Soujhe",
    organization: "Technology Transfer to Startup, Soujhe",
  },
];

export default Testimonial;
