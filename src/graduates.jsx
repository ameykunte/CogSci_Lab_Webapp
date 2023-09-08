import React from 'react';

const Graduate = ({ name, thesisTopic }) => (
  <tr>
    <td>{name}</td>
    <td>{thesisTopic}</td>
  </tr>
);

const graduatesData = [
  {
    name: 'Dhriti Goyal',
    thesisTopic: 'Decision Making under Risk: studied using gambling games',
  },
  {
    name: 'Nikita Sharma',
    thesisTopic:
      'Empathy-related response towards faces of female rape victims - An fMRI study.',
  },
  {
    name: 'Arhant Jain',
    thesisTopic:
      'Decoding self-automated and motivated Finger Movements using Novel Single-Frequency Filtering method - an EEG study',
  },
  {
    name: 'Rajat Singla',
    thesisTopic: 'Neurogaming - Designing Human System Interfaces for Rehabilitation',
  },
  {
    name: 'Mayank Agrawal',
    thesisTopic:
      'Studying the effects of traffic noise and lane system on driver behavior in heterogeneous traffic using VR and physiological measurements',
  },
  {
    name: 'Vivek Kaushal',
    thesisTopic:
      'Clickbait - Credibility, Visual Attention, Propensity and Proliferation',
  },
  {
    name: 'Srinivas Vuddagiri',
    thesisTopic:
      'VR-Phore: A Novel Virtual Reality system for diagnosis and therapeutics of Binocular Vision',
  },
  {
    name: 'Shubhangi Gautam',
    thesisTopic:
      'Investigating Differences in the Default Mode Network in Empathy-Related Stimuli',
  },
  {
    name: 'Mohit Goel',
    thesisTopic:
      'Modulation of empathy-related response towards profession of female rape victims',
  },
  {
    name: 'Supreeth Karan',
    thesisTopic: 'EEG Microstates analysis of tip-pinch and wrist flexion/extension movement',
  },
  {
    name: 'Harsh Sharma',
    thesisTopic: 'Spine Kinematics',
  },
  {
    name: 'Sravya Vatsavayi',
    thesisTopic:
      'Analysing differential solution approaches as applied by fine art and engineering students - A fluid intelligence study',
  },
];

const Graduates = () => (
  <div>
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
                  {graduatesData.map((graduate, index) => (
                    <Graduate key={index} {...graduate} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Graduates;
