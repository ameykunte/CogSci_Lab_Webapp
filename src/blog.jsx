import React from 'react';

const PublicationItem = ({ title, authors, conference }) => (
  <li>
    {title}, {authors}. {conference}
  </li>
);

const Blog = () => (
  <div>
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
              {publicationData.map((publication, index) => (
                <PublicationItem key={index} {...publication} />
              ))}
            </ol>
          </div>
          <div className="col-md-4 fade-up" />
        </div>
      </div>
    </section>
  </div>
);

const publicationData = [
  {
    title: "Analyzing High Decibel Honking Effect on Driving Behavior Using VR and Bio-Sensors",
    authors: "Mayank Agrawal, Kavita Vemuri",
    conference: "AutomotiveUI 2019",
  },
  {
    title: "Analyzing Performance Differences in Artists and Engineers- An RPM Study",
    authors: "Sravya Vatsavayi, Priyanka Srivastava, Kavita Vemuri",
    conference: "Cognitive Science Society 2019, poster presentation",
  },
  {
    title: "Sravya Vatsavayi, Kavita Vemuri, Analysing visual search strategies in artists and engineers - An eye tracking study on RPM",
    authors: "International Society for Intelligence Research Conference, 2019",
    conference: "",
  },
  {
    title: "Kara J. Emery, Courtney Matera, Vicki J. Volbrecht, David H. Peterzell, Kavita Vemuri, Paul Kay, Michael A. Webster, Categorical effects on color appearance",
    authors: "ICVS 2019",
    conference: "",
  },
  {
    title: "Courtney Matera, Saksham Agrawal, Siddhart Srivatsav, Kara J. Emery, Vicki J. Volbrecht, Kavita Vemuri, Paul Kay, Michael A. Webster. A new angle on hue scaling",
    authors: "OSA Vision 2018, Reno Nevada",
    conference: "",
  },
  {
    title: "Talia Retter, Siddhart Srivatsav, Kavita Vemuri, Michael A. Webster. Sensitivity to the number of colors in an ensemble",
    authors: "OSA Vision 2018, Reno, Nevada",
    conference: "",
  },
  {
    title: "Mayank Agarwal, Kavita Vemuri. A Heterogeneous Traffic Virtual-Reality Simulator to Study Irritation/Anger and Driving Behaviour under Adverse Conditions",
    authors: "ACM British HCI 2018 (Best Poster Award)",
    conference: "",
  },
  {
    title: "Rajat Singla, Raviraja Ganta and Kavita Vemuri. An Exergame Themed on the Power of Religious Belief for Stroke/Motor Rehabilitation",
    authors: "ACM British HCI 2018",
    conference: "",
  },
  {
    title: "Kavita Vemuri, Akanksha Srivastava, Saksham Aggrwal, Mithra Anand. Age, pupil size differences and color choices for the 'dress' and the 'jacket'",
    authors: "JOSA A. 2018",
    conference: "",
  },
  {
    title: "Nithiyashree Upara, Aditi Mavalankar, Kavita Vemuri. Eye tracking in naturalistic badminton play — comparing visual gaze pattern strategy in world-rank and amateur player",
    authors: "ACM ETRA PETMEI 2018",
    conference: "",
  },
  {
    title: "Dhriti Sayesh Goyal, Kavita Vemuri. Risk-taking in Roulette Wheel – Exploring the Influence of Gender, Education stream and Co-player",
    authors: "Foundations for Utility and Risk, FUR 2018, University of York, UK",
    conference: "",
  },
  {
    title: "Vivek Kaushal, Dhriti Sayesh Goyal, Kavita Vemuri. Comparative study of risk-taking and academic performance",
    authors: "Foundations for Utility and Risk, FUR 2018, University of York, UK",
    conference: "",
  },
  {
    title: "Shristi Dang, Arunima Ved, Kavita Vemuri (2017). Comparing knowledge acquisition in jigsaw map puzzle game versus self-study",
    authors: "European Conference on Game Based Learning, 2017, Graz, Austria",
    conference: "",
  },
  {
    title: "Raviraja Ganta; Rohan Gupta; Rajat Singla; kavita Vemuri (2017) “Power of Belief” - a game for neuro-motor rehabilitation",
    authors: "11th European Conference on Games Based Learning (ECGBL17), Graz, Austria",
    conference: "",
  },
  {
    title: "Nithiyasree Upara, Jahanavi Nukireddy, Kavita Vemuri. A new test for pattern matching intelligence for school children and performance analysis with academic grade point",
    authors: "International Society for Intelligence Research (ISIR) 2017, Montreal, Canada",
    conference: "",
  },
  {
    title: "Mayank Agarwal & Kavita Vemuri, Simulating and analyzing chaos of Indian Traffic Condition",
    authors: "18th IRF World Road Meet 2017, New Delhi, India",
    conference: "",
  },
  {
    title: "Rohan Bhatial & Kavita Vemuri, Effect of Highbeam glare on driver response time",
    authors: "18th IRF World Road Meet 2017, New Delhi, India",
    conference: "",
  },
  {
    title: "Vemuri K, Surampudi BR. 2015. Evidence of stimulus correlated empathy modes - Group ICA of fMRI data",
    authors: "Brain and Cogn. 94:32-43",
    conference: "",
  },
  {
    title: "Vemuri K., Surampudi BR. 2015. An exploratory investigation of functional network connectivity of empathy and default mode networks in a free-viewing task",
    authors: "Brain Connect. Aug;5(6):384-400",
    conference: "",
  },
  {
    title: "Vemuri K, Bisla K., Mulpuru S, Varadarajan S. Does normal pupil diameter differences in population underlie the color selection of the #dress?",
    authors: "JOSA A, Vol. 33, No. 3 / March 2016",
    conference: "",
  },
  {
    title: "Kukar D., Vemuri,K.(2015) Investigating human visual search/cognition strategy in kinship matching – face matching experiment",
    authors: "3rd International Conference on Cognition, Brain and Computation, IIT Gandhinagar, India",
    conference: "",
  },
  {
    title: "Aditi Mavalankar, Snigdha Dagar, Kavita Vemuri. Decoding (un)known opponents game play, a real-life badminton eye tracking study",
    authors: "EAPCogsci 2015. Full paper",
    conference: "",
  },
  {
    title: "SaiKrishna Mulpuru and Kavita Vemuri. Tracking pedestrain in highbeam condition – a visual sensitivity as a function of pupil dilation analysis",
    authors: "ECVP 2015",
    conference: "",
  },
  {
    title: "Rajat Singla, Junaid Ahmed, Abhishek Aggarwal, Divya Kukkar, Rajendra Kumar, Kavita Vemuri. Intelligent games and sensor feedback interface for neuro-rehabilitation therapy",
    authors: "WCNR 2016, Philadelphia, USA",
    conference: "",
  },
  {
    title: "Jasmine Bhanushali, Sai Parthasarathy Miduthuri, Kavita Vemuri. A dome-shaped interface embedded with low-cost infrared sensors for car-game control by gesture recognition",
    authors: "HCI International 2015, Los Angeles",
    conference: "",
  },
  {
    title: "Abhishek Agarwal, Divya Kukkar, Junaid Ahmed, Rajat Singla, Kavita Vemuri. A game for inducing movement of the stroke affected arm based on the mirror-box concept",
    authors: "ECONS Neurogamng 2015, Los Angeles",
    conference: "",
  },
  {
    title: "Drithi Goyal, Kavita Vemuri. Preliminary comparative analysis of activations due to controlled deep-breathing and resting-state in regions covered by major arteries – a fMRI study",
    authors: "CBC 2015, IITG, India",
    conference: "",
  },
  {
    title: "Vemuri, K., Poplin, A. and Monachesi, P. 2014. YouPlaceIt!: a Serious Digital Game for Achieving Consensus in Urban Planning",
    authors: "17th AGILE Conference on Geographic Information Science (AGILE 2014), Spain",
    conference: "",
  },
  {
    title: "Niyati Mishra, Vamshi Velagapuri, and Kavita Vemuri. Visuo-spatial recall and reproduction of geometrical shapes and math equations as a function of presentation style – static, block and animation",
    authors: "Poster at ACCS 2014, IIT Kanpur",
    conference: "",
  },
  {
    title: "Kavita Vemuri. Analyzing ‘The Omen’: the child is evil but quantum of punishment is debatable",
    authors: "SCMI 2013",
    conference: "",
  },
  {
    title: "Kavita Vemuri. Estimating the functional networks from sudden respiratory changes – a fMRI Group ICA method study",
    authors: "2012. Medimage 2012, Mumbai",
    conference: "",
  },
];


export default Blog;
