import Header from './components/Header';
import Gallery from './components/Gallery';
import GetStarted from './components/GetStarted';
import Section from './components/Section';
import Team from './components/Team';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useRef } from "react";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


import './App.css';
import Hero from './components/Hero';

function App() {
  const emailInputRef = useRef(null);

  const handleFocusEmailField = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };
  return (
    <div className='App'>
      <Header onSignUpClick={handleFocusEmailField} />
      <Hero emailInputRef={emailInputRef} />
      <Section />
      <Gallery />
      <Team />
      <GetStarted emailInputRef={emailInputRef} />
      <Footer facebookIcon={faFacebook}
        twitterIcon={faTwitter}
        instagramIcon={faInstagram} />

    </div>
  );
}

export default App;
