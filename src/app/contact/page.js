'use client';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { useAppContext } from '@/context/AppContext';
import React, { useEffect } from 'react';

const page = () => {
  const { setMobileNav } = useAppContext();
  useEffect(() => {
    setMobileNav(false);
  }, []);
  return (
    <>
      <NavBar />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
