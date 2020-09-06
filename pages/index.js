import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baykam Say</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar active={false} color={0} />

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
            <img
              src="/baykam-say.png"
              alt="Me"
              width={150}
              style={{ borderRadius: "1000px", marginBottom: "1rem" }}
            />
            <h1 style={{ marginBottom: "2rem" }}>Baykam Say</h1>
            <p>
              Hello, I'm Baykam. I am a computer engineering student at Bilkent
              University.
            </p>
            <a
              href="#"
              className="nes-btn is-purple"
              style={{ margin: "1rem 0 2rem 0" }}
            >
              Download CV
            </a>
            <h2 style={{ marginBottom: "1rem" }}>Follow me on:</h2>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <a
                href="https://twitter.com/BaykamSay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="nes-icon twitter" />
              </a>
              <a
                style={{ marginLeft: "1rem" }}
                href="https://www.linkedin.com/in/baykam-say/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="nes-icon linkedin" />
              </a>
              <a
                style={{ marginLeft: "1rem" }}
                href="https://github.com/baykamsay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="nes-icon github" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
