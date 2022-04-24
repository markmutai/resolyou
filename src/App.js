import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import Contact from "./pages/contact";
import { Footer } from './components/footer';
import CookieConsent from "react-cookie-consent";
import { ErrorPage } from "./pages/404";
import { ThemeContext } from './components/darkmode/themeContext';

function App() {
  const { theme } = React.useContext(ThemeContext);

  const cookieBtn = `
  transition-all duration-500 mnuFont rounded-[2px] right-6 uppercase
  border-b-4 border-black border-opacity-30 dark:border-opacity-40
  xsm:mt-0 xsm:w-screen xsm:h-14 xsm:text-3xs
  md:absolute md:w-auto md:px-8 md:h-12 md:mt-1 md:text-2sm+
  `;

  const cookieContainer = `
  flex items-center 
  xsm:text-3xs xsm:py-3 xsm:px-0
  md:py-4 md:px-4 md:text-base
  `;

  const cookieContent = `w-full bodyText place-self-start`;

  const cookieTxt = `Yes, I Agree`;

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        {/* <RouteToTop /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/privacy" element={<Privacy />} /> */}
          <Route exact path="/404" component={ErrorPage} />
          <Route path="*" element={<ErrorPage to="/" replace />}
          />
        </Routes>
        {theme === 'dark' ? (
          <CookieConsent
            disableButtonStyles="true"
            location="bottom"
            containerClasses={`${cookieContainer}`}
            contentClasses={`${cookieContent}`}
            buttonText={`${cookieTxt}`}
            buttonClasses={`${cookieBtn} bg-darkSecondary hover:bg-primary`}
            cookieName="myAwesomeCookieName2"
            className="bodyText"
            padding={0}
            style={{ background: "hsla(215, 100%, 4%, .97)" }}
            expires={150}
            hideOnAccept="false"
          >
            We use cookies to give you the best online experience. Please let us know if you agree to the use of cookies
          </CookieConsent>
        ) : (
          <CookieConsent
            disableButtonStyles="true"
            location="bottom"
            containerClasses={`${cookieContainer}`}
            contentClasses={`${cookieContent}`}
            buttonText={`${cookieTxt}`}
            buttonClasses={`${cookieBtn} bg-secondary hover:bg-darkerSecondary`}
            cookieName="myAwesomeCookieName2"
            className="bodyText"
            padding={0}
            style={{ background: "hsla(211, 100%, 12%, 0.98)" }}
            expires={150}
            hideOnAccept="false"
          >
            We use cookies to give you the best online experience. Please let us know if you agree to the use of cookies
          </CookieConsent>
        )
        }
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
