import React from 'react';
import Navbar from '../componets/Navbar';
import Hero from '../componets/Hero';
import Trusted from '../componets/Trusted';
import Consulting from '../componets/Consulting';
import Combine from '../componets/Combine';
import ContactUs from '../componets/ContactUs';
import Customer from '../componets/Customer';
import OverAll from '../componets/OverAll';
import Faq from '../componets/Faq';
import Rush from '../componets/Rush';
import Tools from '../componets/Tools';

import Footer from '../componets/Footer';

function HomePage() {
  return (
    <div >
      <Navbar />

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

      <Footer />

    </div >
  )
}

export default HomePage
