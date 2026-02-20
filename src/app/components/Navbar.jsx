'use client';
import React from 'react';
import "../styles/navbar.modal.css";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const MyNavbar = () => {
  const pathname = usePathname(); 
  const router = useRouter();

  const scrollToSection = (id) => {
    if (typeof window === 'undefined') return; 
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleScrollLink = (id) => (e) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToSection(id); 
    } else {
      router.push("/"); 
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  const handleHomeClick = (e) => handleScrollLink("main")(e);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: "#0B1F3A", color: "white" }}>
      <Container>
        <Navbar.Brand onClick={handleHomeClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <Image 
            src="/logo.jpg" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="me-2 rounded-circle" 
            priority 
          />
          Radiant Services Company
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: "white" }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>

            <Nav.Link href="/about">About</Nav.Link>

            <Nav.Link onClick={handleScrollLink("voice")}>Voice of Customer</Nav.Link>
            <Nav.Link onClick={handleScrollLink("event")}>Recent Updates</Nav.Link>
            <Nav.Link onClick={handleScrollLink("task")}>FAQ</Nav.Link>
            <Nav.Link onClick={handleScrollLink("contact")}>Contact</Nav.Link>

            <Button href="tel:+918454816913" style={{ backgroundColor: "#53bc48", border: 'none' }}>
              +91 8454816913
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;