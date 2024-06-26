
import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import Trusted from './componets/Trusted';
import Consulting from './componets/Consulting';
import Combine from './componets/Combine';
import ContactUs from './componets/ContactUs';
import Customer from './componets/Customer';
import OverAll from './componets/OverAll';
import Faq from './componets/Faq';
import Rush from './componets/Rush';
import Tools from './componets/Tools';
import Footer from './componets/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      {/* <Navbar />
      <Hero />
      <Trusted />
      <Consulting />
      <Combine />
      <ContactUs />
      <Customer />
      <OverAll />
      <Faq />
      <Rush />
      <Tools />
      <Footer /> */}


      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* <Route path="/" element={<AboutPage />} /> */}
          {/* <Route path="/ServicePage " element={<ServicePage />}/> */}


        </Routes>
      </Router>

    </>
  )
}

export default App
