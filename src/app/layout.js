import "./globals.css";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={poppins.className}>
          <MyNavbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
