import React from 'react';

// Define an array of team members with their data
const teamMembers = [
  {
    name: 'Dr. Kavita Vemuri',
    role: 'Assistant Professor',
    bio:
      'Cognitive neuroscience of empathy, game design and engineering, innovation and entrepreneurship, fiber optic and liquid crystal devices for optical communications and sensors, control systems',
    imageSrc: 'images/team/kavita.jpg',
  },
  {
    name: 'Supreeth Menon',
    role: 'Undergrad Researcher',
    bio: 'Spine Kinematics modelling with data collected using Motion Capture system.',
    imageSrc: 'images/team/Supreeth.jpg',
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
    name: 'Amey Kunte',
    role: 'Undergrad Researcher',
    bio:
      'Researching the role of trust in economic behaviour using behavioural economics experiments',
    imageSrc: 'images/team/Amey.jpg',
  },
  {
    name: 'Tanvi Narsapur',
    role: 'Undergrad Researcher',
    bio: 'Understanding the evolution of trust, fairness and altruism in children population',
    imageSrc: 'images/team/Tanvi.jpeg',
  },
  {
    name: 'Harshit Aggarwal',
    role: 'Undergrad Researcher',
    bio:
      'Understanding the visual eye movements to identify central and peripheral vision perception through pupillary responses.',
    imageSrc: 'images/team/harshit.jpeg',
  },
  {
    name: 'Raghav Raj Dwivedi',
    role: 'Undergrad Researcher',
    bio:
      'Correlations between personal financial behaviour and real world geopolitics through game design',
    imageSrc: 'images/team/Raghav.jpg',
  },
  {
    name: 'Aarnav Nagariya',
    role: 'Undergrad Researcher',
    bio:
      'Behaviour of Two-Wheeler Indian Drivers on Urban Roads, with Comparative Analysis between Experienced and Novice drivers',
    imageSrc: 'images/team/Aarnav.jpg',
  },
  {
    name: 'Parth Maradia',
    role: 'Undergrad Researcher',
    bio: 'Cognitive Empathy towards Rape Victims',
    imageSrc: 'images/team/Parth.jpg',
  },
  {
    name: 'Giri Prasath',
    role: 'Undergrad Researcher',
    bio: 'Kinship Recognition and Analysis using Eye Tracking studies',
    imageSrc: 'images/team/Giri_Prasath.jpeg',
  },
  {
    name: 'Aditya Kondai',
    role: 'Undergrad Researcher',
    bio:
      'Analysis of effect of AI-based facial assessment tools on self-confidence and finding relation between self-confidence and self-objectification levels.',
    imageSrc: 'images/team/Aditya.jpeg',
  },
  {
    name: 'Keerthi Gouravarapu',
    role: 'Undergrad Researcher',
    bio: 'EEG Analysis for finding patterns and abnormalities between healthy and stroke patients',
    imageSrc: 'images/team/keerthi.jpg',
  },
  {
    name: 'Kunal Lahoti',
    role: 'Undergrad Researcher',
    bio: 'Understanding the effect of loss-framing in insurance purchase decisions using a game-like interface',
    imageSrc: 'images/team/kunal.jpg',
  },
  {
    name: 'Divyansh Tiwari',
    role: 'Undergrad Researcher',
    bio: 'Biomechanics - spine/body kinematics using marker/markerless motion capture',
    imageSrc: 'images/team/Divyansh.jpg',
  },
  {
    name: 'Nandini Maroo',
    role: 'Undergrad Researcher',
    bio: 'EEG Analysis for finding patterns and abnormalities between healthy and stroke patients',
    imageSrc: 'images/team/Nandini.jpeg',
  },
  {
    name: 'Nikunj Nawal',
    role: 'Undergrad Researcher',
    bio: 'Understanding the effect of wavelength on refractive error in young adults using pupillary responses',
    imageSrc: 'images/team/Nikunj.jpg',
  },
  {
    name: 'B Vaibhaw Kumar',
    role: 'Undergrad Researcher',
    bio:
      'Using Eye-tracking to Study the Behaviour of Indian Drivers on Urban Roads, with Comparative Analysis between Experienced and Novice Drivers',
    imageSrc: 'images/team/Vaibhaw.jpg',
  },
  {
    name: 'Prerak Srivastava',
    role: 'Undergrad Researcher',
    bio:
      'Procedural Maze Generation for Education: Building an app to allow educators educators to easily generate and customize mazes and teach concepts through them',
    imageSrc: 'images/team/prerak.jpg',
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
                      {member.name}
                      <small className="role muted">{member.role}</small>
                    </h5>
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

