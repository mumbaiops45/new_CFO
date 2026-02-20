import Image from "next/image";
import styles from "./page.module.css";
import Main from "./components/Main";
import Feature from "./components/Feature";
import Body from "./components/Body";

export default function Home() {
  return (
    <div>
      <Main/>
      <Feature/>
      <Body/>
    </div>

  );
}
