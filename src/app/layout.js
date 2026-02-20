import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body >
          <MyNavbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
