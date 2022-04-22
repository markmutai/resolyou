import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/contact";
import { Footer } from './components/footer';
import { ErrorPage } from "./pages/404"
// import ClipLoader from "react-spinners/ClipLoader"

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        {/* <RouteToTop /> */}
        {/* <AnimatePresence> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/privacy" element={<Privacy />} /> */}
          <Route exact path="/404" component={ErrorPage} />
          <Route path="*" element={<ErrorPage to="/" replace />}
          />
        </Routes>
        <Footer />
        {/* </AnimatePresence> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
