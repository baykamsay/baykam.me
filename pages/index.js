import Head from "next/head";
// import styles from "../styles/Home.module.scss";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baykam Say</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <h1 style={{ fontSize: "3rem" }}>Hello, I'm Baykam.</h1>
          <p>
            Currently, I am studying computer engineering at{" "}
            <a
              href="https://w3.bilkent.edu.tr/bilkent/"
              target="_blank"
              rel="noopener noreferrer"
              className="bilkent"
            >
              Bilkent University
            </a>
            .
          </p>
          <p>
            You can follow my work and look at my projects on my{" "}
            <a
              href="https://github.com/baykamsay"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>{" "}
            profile. I am currently open to working opportunities. If you'd
            like, you can view my{" "}
            <a
              href="https://www.linkedin.com/in/baykam-say/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              LinkedIn
            </a>{" "}
            profile or download my{" "}
            <a href="/baykam-say-cv.pdf" className="resume" download>
              resume
            </a>
            . If you are just here to get to know me or have a chat, you can
            follow me on{" "}
            <a
              href="https://twitter.com/BaykamSay"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              Twitter
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
