import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [heading, setHeading] = useState('Greetings, Traveler!');
  const history = useHistory();

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div>
        <div>
          <p>
            What brings you to these parts of the Sword Coast? Heading off on an 
            adventure for glory and fame, or perhaps searching the world for it's 
            riches and hidden secrets? Whatever the case, you must be eager for 
            your journey to begin, hmm? Well, before you do, make sure you've 
            prepared with a goodnight's rest and a hearty meal. Hopefully you 
            make some friends and allies along the way, or at least, I hope your journey 
            is in decent company. It can be a strange, dangerous world out there; 
            better to not go alone.
          </p>

          <p>
            There are some great places to stay whenever you pull into a city or 
            town. Ain't nobody and no place better to tell your tales and rest your 
            heads than with a barkeep at your local Inn, I can tell you that, haha! 
            You can certainly gather yourself some local jobs and rumors from them too, 
            so you'll never run out of things to do! Perhaps you'll find yourself on your
            own unique adventure along the way! Make sure to stop by and let me know 
            how those go, yeah?
          </p>

          <p>
            Anyway, come and kick your feet up. I'll go grab you your drink, 
            and once you're ready and registered, head on up into your room and record your 
            journey thus far. And feel free to take a look at the Visitor's Records. 
            Perhaps you might be able to gather hints and leads for yourselves in them!
          </p>

          <p>
            I wish you the best of luck, adventurer.
          </p>
          <p>
            <i> And welcome to the Sword Coast~</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
