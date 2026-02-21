import Image from "next/image";
import styles from "./page.module.css";
import Main from "./components/Main";
import Feature from "./components/Feature";
import Body from "./components/Body";
import Faq from "./components/Faq";
import Workprocess from "./components/WorkProcess";
import Highlight from "./components/Highlight";
import CaseStudies from "./components/CaseStudies";
import ClientFeedback from "./components/ClientFeedback";
import RecentBlog from "./components/RecentBlog";
import Cclients from "./components/Cclients";

export default function Home() {
  return (
    <div>
      <section id="main">
        <Main />
      </section>

      <Cclients />
      <Feature />
      <Body />
      <Workprocess />
      <Highlight />
      <CaseStudies />
      <section id="voice">
        <ClientFeedback />
      </section>
      <section id="task">
        <Faq />
      </section>

      <section id="event">
        <RecentBlog />
      </section>

    </div>

  );
}
