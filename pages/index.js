import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baykam Say</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <h1>Hello, I'm Baykam.</h1>
          <p>
            Currently, I am studying computer science at{" "}
            <a
              href="https://www.tum.de/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="bilkent"
            >
              Technical University of Munich
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
            profile. I am open to working opportunities so if you'd like, you
            can view my{" "}
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
          <p>
            You can contact me{" "}
            <a
              href="https://forms.gle/miF2GVCMQvbk76ST7"
              target="_blank"
              rel="noopener noreferrer"
              className="contact"
            >
              here
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
