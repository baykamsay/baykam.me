import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import projectStyles from "../styles/Projects.module.css";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <div className={[styles.container, projectStyles.container].join(" ")}>
      <Head>
        <title>Baykam Say | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar active={true} color={2} />

      <main className={styles.main}>
        <h1>Hey</h1>
      </main>
    </div>
  );
}
