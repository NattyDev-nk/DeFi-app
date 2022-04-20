import React from 'react'
import { Featured } from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Navbar } from './components/Navbar'
import SignUp from './components/SignUp';

function App() {
  return (
    <>
     <Navbar /> 
     <Hero />
     <Featured />
     <SignUp />
     <Footer />
    </>
  );
}

export default App;
