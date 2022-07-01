import React, { useState } from 'react';
import AboutUs from '../components/about-us/AboutUs';
import Login from '../components/login/Login';

const Ingresar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <>
      <AboutUs/>
      <Login open={openLogin} onClose={() => setOpenLogin(false)}/>
    </>
  )
}

export default Ingresar;
