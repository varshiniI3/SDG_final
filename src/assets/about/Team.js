import React from "react";
import "./Team.css";
import member1 from '../../images/member1.jpg';
import member2 from '../../images/member2.jpg';
import member3 from '../../images/member3.jpg';
import member4 from '../../images/member4.jpg';
import member5 from '../../images/member5.jpg';
import member6 from '../../images/member6.jpg';

const Team = () => {
  return (
     
      <div className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-row">
            <div className="member">
              <img src={member1} alt="Brandon Copperfield" />
              <div className="member-info">
                <h3>Brandonssss Copperfield</h3>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div className="member">
              <img src={member2} alt="Clark Roberts" />
              <div className="member-info">
                <h3>Clark Roberts</h3>
                <p>Chief Finance Officer</p>
              </div>
            </div>
            <div className="member">
              <img src={member3} alt="Ashley Hardy" />
              <div className="member-info">
                <h3>Ashley Hardy</h3>
                <p>VP Sales and Marketing</p>
              </div>
            </div>
          </div>
          <div className="team-row">
            <div className="member">
              <img src={member4} alt="Dennis Norris" />
              <div className="member-info">
                <h3>Dennis Norris</h3>
                <p>Chief Marketing Officer</p>
              </div>
            </div>
            <div className="member">
              <img src={member5} alt="Gina Kennedy" />
              <div className="member-info">
                <h3>Gina Kennedy</h3>
                <p>Admin Assistant</p>
              </div>
            </div>
            <div className="member">
              <img src={member6} alt="Fernanda Torres" />
              <div className="member-info">
                <h3>Fernanda Torres</h3>
                <p>Tax Consultant</p>
              </div>
            </div>
          </div>
        </div>
        </div>
       
    
  );
};

export default Team;
