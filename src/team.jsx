import React from 'react';

// Define an array of team members with their data
const teamMembers = [
  {
    name: 'Kavita Vemuri',
    role: 'Professor',
    bio:  'Cognitive Neuroscience, Neuroeconomics, Neurogaming, Serious Games, Empathy, Vision, Pupillometry, EEG, fMRI, VR, AR, AI, ML',
    imageSrc: 'images/team/kavita.jpg',
  },
  {
    name: 'Ayushi Agarawal',
    role: 'Doctoral Researcher',
    bio:
      'The role of alcohol on cognitive control as applicable to violence against women. Includes both behavioural and neuroimaging studies.',
    imageSrc: 'images/team/ayushi.jpg',
  },
  {
    name: 'Pragati Gupta',
    role: 'Doctoral Researcher',
    bio:
      'Analyzing the gains from visuo-motor response training in post-stroke using EMG and EEG measure of the paretic muscle and motor parietal network',
    imageSrc: 'images/team/Pragati.jpeg',
  },
  {
    name: 'Kanala Sudheshna',
    role: 'Postgrad Researcher',
    bio:
      'Exploring visual system and its relationship as a neurobiomarker in neurodegenerative conditions through pupillary responses.',
    imageSrc: 'images/team/sudheshna.jpeg',
  },
  {
    name: 'Nancy Hada',
    role: 'Postgrad Researcher',
    bio: 'Feature Extraction and Object Detection from Indian Tribal Paintings',
    imageSrc: 'images/team/Nancy.jpg',
  },
  {
    name: 'Nikunj Nawal',
    role: 'Undergrad Researcher',
    bio: 'Understanding the effect of wavelength on refractive error in young adults using pupillary responses',
    imageSrc: 'images/team/Nikunj.jpg',
  },
  {
    name: 'Giri Prasath',
    role: 'Undergrad Researcher',
    bio: 'Kinship Recognition and Analysis using Eye Tracking studies',
    imageSrc: 'images/team/Giri_Prasath.jpeg',
  },
  {
    name: 'Tanvi Narsapur',
    role: 'Undergrad Researcher',
    bio: 'Understanding the evolution of trust, fairness and altruism in children population',
    imageSrc: 'images/team/Tanvi.jpeg',
  },
  {
    name: 'Prateek Sancheti',
    role: 'Undergrad Researcher',
    bio: 'Analysing M&A Deals in Indian Stock Market && Who-is-Who: An Online Identity Theft Detection Portal',
    imageSrc: 'images/team/Prateek.jpg',
  },
  {
    name: 'B Vaibhaw Kumar',
    role: 'Undergrad Researcher',
    bio:
      'Using Eye-tracking to Study the Behaviour of Indian Drivers on Urban Roads, with Comparative Analysis between Experienced and Novice Drivers',
    imageSrc: 'images/team/Vaibhaw.jpg',
  },
  {
    name: 'Amey Kunte',
    role: 'Undergrad Researcher',
    bio:
      'Researching the role of trust in economic behaviour using behavioural economics experiments',
    imageSrc: 'images/team/Amey.jpg',
  },
  {
    name: 'Divyansh Tiwari',
    role: 'Undergrad Researcher',
    bio: 'Biomechanics - spine/body kinematics using marker/markerless motion capture',
    imageSrc: 'images/team/Divyansh.jpg',
  },

  {
    name: 'Parth Maradia',
    role: 'Undergrad Researcher',
    bio: 'Cognitive Empathy towards Rape Victims',
    imageSrc: 'images/team/Parth.jpg',
  },
  {
    name: 'Prerak Srivastava',
    role: 'Undergrad Researcher',
    bio:
      'Procedural Maze Generation for Education: Building an app to allow educators educators to easily generate and customize mazes and teach concepts through them',
    imageSrc: 'images/team/prerak.jpg',
  },
  {
    name: 'Nandini Maroo',
    role: 'Undergrad Researcher',
    bio: 'EEG Analysis for finding patterns and abnormalities between healthy and stroke patients',
    imageSrc: 'images/team/Nandini.jpeg',
  },
  {
    name: 'Keerthi Gouravarapu',
    role: 'Undergrad Researcher',
    bio: 'EEG Analysis for finding patterns and abnormalities between healthy and stroke patients',
    imageSrc: 'images/team/keerthi.jpg',
  },
  {
    name: 'Harshit Aggarwal',
    role: 'Undergrad Researcher',
    bio:
      'Understanding the visual eye movements to identify central and peripheral vision perception through pupillary responses.',
    imageSrc: 'images/team/harshit.jpeg',
  },
];



const Team = () => {
  const membersPerRow = 4; // Number of team members per row

  return (
    <div>
      <section id="team" className="white">
        <div className="center gap fade-down section-heading">
          <h2 className="main-title">The Team</h2>
          <hr />
        </div>
        <div className="gap" />

        {teamMembers.reduce((rows, member, index) => {
          // Split team members into rows of 4
          if (index % membersPerRow === 0) {
            rows.push([]);
          }
          rows[rows.length - 1].push(member);
          return rows;
        }, []).map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((member, index) => (
              <div key={index} className="col-md-3 col-xs-6">
                <div className="center team-member">
                  <div className="team-image">
                    <img
                      className="img-responsive img-thumbnail bounce-in"
                      src={member.imageSrc}
                      alt={member.name}
                    />
                  </div>
                  <div className="team-content fade-up">
                    <h5>
                      {member.name}<br></br>
                      <small className="role muted">{member.role}</small>
                    </h5><br></br>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="gap" />
      </section>
    </div>
  );
};

export default Team;

