import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baykam Say</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.left}>
            <Link href="/about">
              <a className={styles.title} id={styles.about}>
                About
              </a>
            </Link>
            <Link href="/projects">
              <a className={styles.title} id={styles.projects}>
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a className={styles.title} id={styles.blog}>
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className={styles.title} id={styles.contact}>
                Contact
              </a>
            </Link>
          </div>
          <div className={styles.right}>
            <h1>Baykam Say</h1>
            <p>
              Hello, I'm Baykam. I am a computer engineering student at Bilkent
              University.
            </p>
            {/* <button>Download CV</button> */}
            <a href="#" className="nes-btn">
              Download CV
            </a>
            <h2>Follow me on:</h2>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <a href="#">
                <i className="nes-icon twitter" />
              </a>
              <a href="#">
                <i className="nes-icon linkedin" />
              </a>
              <a href="#">
                <i className="nes-icon github" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
