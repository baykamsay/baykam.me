import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className={[styles.container, aboutStyles.container].join(" ")}>
      <Head>
        <title>Baykam Say | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar active={true} color={1} />

      <main className={styles.main}>
        <h1>Hey</h1>
      </main>
    </div>
  );
}
