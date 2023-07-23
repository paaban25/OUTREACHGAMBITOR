
import RegistrationSuccessful from './components/RegistrationSuccessful/RegistrationSuccesfull.jsx';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx';
import './App.css';
import img1 from './components/RegistrationSuccessful/image (1).png';
import img2 from './components/RegistrationSuccessful/image (2).png';
import img3 from './components/RegistrationSuccessful/image (3).png';
import img4 from './components/RegistrationSuccessful/image (4).png';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <>
    <Navbar></Navbar>
    {/* <RegistrationForm/> */}
    {/* <RegistrationSuccessful img={img3}></RegistrationSuccessful> */}
    <AboutUs></AboutUs>
    <Footer></Footer>
    
    </>
    
  );
}

export default App;
