
'use client';
import React from 'react';
import "../styles/navbar.modal.css";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
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
      setTimeout(() => scrollToSection(id), 150);
    }
  };

  const handleHomeClick = (e) => handleScrollLink("main")(e);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand onClick={handleHomeClick}>
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-circle"
            priority
          />
          Radiant Services Company
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  align-items-lg-center">
            <Nav.Link onClick={handleHomeClick} >Home</Nav.Link>
            <Nav.Link onClick={handleScrollLink("voice")}>Voice of Customer</Nav.Link>
            <Nav.Link onClick={handleScrollLink("event")}>Recent Updates</Nav.Link>
            <Nav.Link onClick={handleScrollLink("task")}>FAQ</Nav.Link>
            <Nav.Link onClick={handleScrollLink("main")}>Contact</Nav.Link>

            <Button href="tel:+918454816913" className="call-btn">
              +91 8454816913
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;