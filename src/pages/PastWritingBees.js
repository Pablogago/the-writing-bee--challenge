import React from 'react';

function PastWritingBees() {
  return (
   <div className="past-writing-bees">
     <div className="past-writing-bees--wrapper">
      <div className="title">Past Writing Bees</div>
      <ul className="writing-bees--list">
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/nickbruel-thumb.jpg`}/>
          <div className="bees-card--description">
            <span className="bees-card--date">Jan 2019 - May 2019</span>
            <span className="bees-card--subtitle">Uncle Conrad and the Egg</span>
            <span className="bees-card-by--text">StoryStart by:</span>
            <span className="bees-card--author">Nick Bruel</span>
          </div>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/jamaljoseph-thumb.jpg`}/>
          <div className="bees-card--description">
            <span className="bees-card--date">Jan 2019 - May 2019</span>
            <span className="bees-card--subtitle">The Power of Spoken Word</span>
            <span className="bees-card-by--text">StoryStart by:</span>
            <span className="bees-card--author">Jamal Joseph</span>
          </div>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/jeffkinney-thumb.png`}/>
          <div className="bees-card--description">
            <span className="bees-card--date">June 2018</span>
            <span className="bees-card--subtitle">Unfathomable Mistery of River Street</span>
            <span className="bees-card-by--text">StoryStart by:</span>
            <span className="bees-card--author">Jeff Kinney</span>
          </div>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/jeffcohen-thumb.png`}/>
          <div className="bees-card--description">
            <span className="bees-card--date">Feb 2017 - Mar 2017</span>
            <span className="bees-card--subtitle">The Legend of One Eyed Willy’s Secret Second Treasure</span>
            <span className="bees-card-by--text">StoryStart by:</span>
            <span className="bees-card--author">Jeff Cohen</span>
          </div>
        </li>
      </ul>
     </div>
   </div>
  );
}

export default PastWritingBees;
