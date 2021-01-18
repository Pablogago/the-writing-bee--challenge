import React from 'react';
import ScrollImg from '../images/scroll.png';
import BoomWriterRev from '../images/boomwriter_bwm_rgb_rev.png';
import HeroGlobe from '../images/hero_globe.png';
import BoomWriter from '../images/bw_splat.png';
import Triangle from '../images/triangle.png';
import TestimonyImg from '../images/d_wilson.jpg';
import HowItWorksDiagram from '../images/how-it-works-diagram.png';
import WritingIcon from '../images/writing.png';
import CelebrationIcon from '../images/finals.png';

import BulletRead from '../images/works_bullet_read.png';
import BulletRepeat from '../images/works_bullet_repeat.png';
import BulletShare from '../images/works_bullet_share.png';
import BulletVote from '../images/works_bullet_vote.png';
import BulletWrite from '../images/works_bullet_write.png';

import { ReactComponent as TickIcon } from '../images/tick.svg';

function HomePage() {
  return (
    <div className="home-section">
      <section className="hero-section">
        <div className="hero-heading">
          <a className="hero-heading--link">
            <div className="heading-link-block">
              <span>The 2020</span>
              <img className="scroll-img" src={ScrollImg} alt="scroll" />
            </div>
            <span className="heading--title">Writing Bee</span>
          </a>
          <div className="heading--descriptions">
            <p>Because all kids love writing stories!</p>
            <p>Powered by: <br /><img className="boomWriterRev-img" src={BoomWriterRev} /></p>
          </div>
          <div className="heading--img-wrapper">
            <img className="globe-img" src={HeroGlobe} />
            <img className="triangle-img" src={Triangle} />
          </div>
          <div className="home-section--intro">
            <div className="intro--wrapper">
              <h1 className="title">A Global event that starts right in your classroom!</h1>
              <p>Writing Bee Qualifying Rounds take place in individual classrooms around the world. Classroom-based winners and top vote-getters qualify for the Writing Bee Finals and a chance to become The Writing Bee Champion!</p>
              <a className="btn btn-primary" href="https://account.boomwriter.com/signup">Start your class writing bee</a>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-title">The Writing Bee will improve Your Students’ Learning by Providing:</div>
        <ul className="features-list">
          <li className="features-list--item">
            <TickIcon className="tick-icon" width="20" height="20" title="tick"/>
            <span>Standards-based Writing Practice</span>
            <p>While creating their story, students will strengthen their use of effective techniques, descriptive details, and clear event sequences.</p>
          </li>
          <li className="features-list--item">
            <TickIcon className="tick-icon" width="20" height="20" title="tick"/>
            <span>Standards-based Writing Practice</span>
            <p>While creating their story, students will strengthen their use of effective techniques, descriptive details, and clear event sequences.</p>
          </li>
          <li className="features-list--item">
            <TickIcon className="tick-icon" width="20" height="20" title="tick"/>
            <span>Standards-based Writing Practice</span>
            <p>While creating their story, students will strengthen their use of effective techniques, descriptive details, and clear event sequences.</p>
          </li>
          <li className="features-list--item">
            <TickIcon className="tick-icon" width="20" height="20" title="tick"/>
            <span>Standards-based Writing Practice</span>
            <p>While creating their story, students will strengthen their use of effective techniques, descriptive details, and clear event sequences.</p>
          </li>
        </ul>
        <a className="btn btn-primary" href="https://account.boomwriter.com/signup">Start your class writing bee</a>
        <div className="features--testimony-holder">
          <img src={TestimonyImg} alt="testimony"/>
          <blockquote>The Writing Bee was the most valuable writing experience I have had with my class in many years. My students were fully engaged - they collaborated, edited, imagined, improved, and happily worked for many hours on their chapter writing. My students improved their writing skills and also learned that they love writing.  Invaluable lessons.  Thank you, BoomWriter!</blockquote>
          <p className="testimony-name">D.Wilson</p>
          <p>Camino Elementary School, Camino, California USA</p>
        </div>
        <a className="btn btn-primary" href="https://account.boomwriter.com/signup">Start your class writing bee</a>
      </section>
      <section className="competition-section">
        <div className="section-title">The Writing Bee Competition</div>
        <p>The Writing Bee kicks off in schools with students participating in district or school-based Qualifying sessions. Students who qualify move on to the Finals with a chance to be crowned The Writing Bee Champion.</p>
        <img src={HowItWorksDiagram} alt="diagram"/>
        <ul className="section-list">
          <li>
            <span>1. Kick Off</span>
            <p>Students read the Writing Bee’s original story start before independently writing their version of the next chapter. Teachers have the option to provide feedback and request revisions before approving each student's work.</p>
          </li>
          <li>
            <span>2. Qualifying Rounds</span>
            <p>Students read the anonymous submissions of their peers in small batches and vote for their favorites. A winning piece is identified to serve as the story’s middle chapter, and the process repeats to identify the final chapter.</p>
          </li>
          <li>
            <span>3. Finals</span>
            <p>Class chapter winners and top vote-getters qualify to compete in The Writing Bee Finals. Plus, all classroom Qualifying round participants are eligible to read and cast votes for their favorites throughout The Finals.</p>
          </li>
          <li>
            <span>4. Winner</span>
            <p>Writing Bee Finalists create a new story by submitting their work for review by students around the world. Only top vote-getters move on in this ‘knockout style’ event until the 2020 Writing Bee Champion is crowned!</p>
          </li>
        </ul>
      </section>
      <section className="boomwriter-section">
        <div className="section-title">The Writing Bee is powered by <img alt="BoomWriter" src={BoomWriter}/></div>
        <p>The Writing Bee employs BoomWriter’s unique content generation platform that allows students to compete and collaborate online as they:</p>
        <div className="boomwriter-imgs-wrapper">
          <ul className="section-list">
            <li>
              <img width="60" height="60" src={BulletRead} alt="BulletRead"/>
              <span>Read/View<br/></span>The prompt
            </li>
            <li>
              <img width="60" height="60" src={BulletWrite} alt="BulletWrite"/>
              <span>Write<br/></span>An entry
            </li>
            <li>
              <img width="60" height="60" src={BulletShare} alt="BulletShare"/>
              <span>Share<br/></span>With peers
            </li>
            <li>
              <img width="60" height="60" src={BulletVote} alt="BulletVote"/>
              <span>Vote<br/> </span>For the favorite
            </li>
            <li>
              <img width="60" height="60" src={BulletRepeat} alt="BulletRepeat"/>
              <span>Repeat<br/></span>Until complete
            </li>
          </ul>
        </div>
      </section>
      <section className="timeline-section">
        <div className="section-title">The Writing Bee Timeline</div>
        <div className="timeline-cards">
          <div className="card">
            <div className="card-arrow"><span className="card-arrow--dot"></span></div>
            <div className="card-content">
              <img src={WritingIcon} alt="Writing icon"/>
              <div>
                <div className="card-content--title">December - March 2020 - Qualifying Sessions</div>
                <p>Teachers are welcome to conduct classroom-based qualifying sessions with their students in Grades 4-6.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-arrow"><span className="card-arrow--dot"></span></div>
            <div className="card-content">
              <img src={CelebrationIcon} alt="Celebration icon"/>
              <div>
                <div className="card-content--title">December - March 2020 - Qualifying Sessions</div>
                <p>Teachers are welcome to conduct classroom-based qualifying sessions with their students in Grades 4-6.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
