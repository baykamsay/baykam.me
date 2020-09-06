import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import contactStyles from "../styles/Contact.module.css";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div className={[styles.container, contactStyles.container].join(" ")}>
      <Head>
        <title>Baykam Say | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar active={true} color={4} />

      <main className={styles.main}>
        <h1>Hey</h1>
      </main>
    </div>
  );
}
