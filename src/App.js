import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import { Box, Container } from '@mui/material';
import OurValues from './components/OurValues';
import Services from './components/Services';
import Footer from './components/Footer';
import Team from './components/Team';
import Contact from './components/Contact';
import NewsLetter from './components/NewsLetter';
import Blog from './components/Blog';

const App = () => {
  return (
    <div>
      {/* menu */}
      <Menu />

      {/* header */}
      <Header />

      {/* nos valeur */}
      <OurValues />

      {/* Services */}
      <section id='services'>
        <Services />
      </section>

      {/* team */}
      <section id='team'>
        <Team />
      </section>

      {/* contact */}
      <section id='contact'>
        <Contact />
      </section>

      {/* blog */}
      <section id='blog'>
        <Blog />
      </section>

      {/*newsletter */}
      <NewsLetter />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
