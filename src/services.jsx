import React from 'react';

const ServiceBlock = ({ iconClass, title, description }) => (
  <div className="col-md-4 col-sm-6">
    <div className="service-block">
      <div className="pull-left bounce-in">
        <i className={`fa ${iconClass} fa-md`} />
      </div>
      <div className="media-body fade-up">
        <h3 className="media-heading">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div>
    <section id="services" className="white">
      <div className="container">
        <div className="gap" />
        <div className="row">
          <div className="col-md-12">
            <div className="center gap fade-down section-heading">
              <h2 className="main-title">Stuff We Do</h2>
              <hr />
              <h4>
                Presently students are working on cutting-edge research in the
                following areas
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service, index) => (
            <ServiceBlock key={index} {...service} />
          ))}
        </div>
        <div className="gap" />
      </div>
    </section>
  </div>
);

const serviceData = [
  {
    iconClass: 'fa-gamepad',
    title: 'Serious Games',
    description:
      'The serious games research focuses designing and developing software & hardware for visuo-motor rehabilitation post stroke, spinal-cord injuries or any motor related degeneration.',
  },
  {
    iconClass: 'fa-coins',
    title: 'Neuroeconomics',
    description:
      'Neuroeconomics research looks at risk-taking propensity and decision-making skills in financial transactions. In-house game applications are designed and developed, in addition to applying traditional games.',
  },
  {
    iconClass: 'fa-heart',
    title: 'Empathy',
    description:
      'Objectification, empathy and violence on the female population is being studied at the neural (brain scanning) and behavioural (eye tracking, physiological) level.',
  },
  {
    iconClass: 'fa-brain',
    title: 'Fluid Intelligence',
    description:
      'Analytical reasoning gauged from fluid intelligence metrics and correlation to cognitive thinking styles is being pursued with special focus on role of education stream – STEM, fine arts, social sciences.',
  },
  {
    iconClass: 'fa-palette',
    title: 'Colour Perception',
    description:
      'Fundamental research on the visual system covers color perception and human-eye sensitively to high glare with focus on vehicle driver motor responses.',
  },
  {
    iconClass: 'fa-eye',
    title: 'Eye Measurement Systems',
    description:
      'Low cost compact system to measure a number of eye related conditions - for example: amblyopia, strabismus, Ametropia, pupillometry and color vision.',
  },
];

export default Services;
