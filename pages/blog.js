import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import blogStyles from "../styles/Blog.module.css";
import Navbar from "../components/navbar";

export default function Blog() {
  return (
    <div className={[styles.container, blogStyles.container].join(" ")}>
      <Head>
        <title>Baykam Say | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar active={true} color={3} />

      <main className={styles.main}>
        <h1>Hey</h1>
      </main>
    </div>
  );
}
