import Head from "next/head";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Head>
        <title>Baykam Say | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container
          className="bg-white"
          style={{ minHeight: "100vh", paddingTop: "56px" }}
        >
          <Container fluid="md" style={{ maxWidth: 800, marginTop: "2rem" }}>
            <h1>About Me</h1>
            <p>
              I'm a computer engineering student at Bilkent University and a
              board member at Bilkent Young Entrepreneurs Society. I'm
              experienced in Java and C++ but I also love learning new concepts.
              The new concept that I am learning right now is web programming. I
              am starting to get comfortable with HTML and CSS but I still have
              a long way to go, especially with JavaScript. I like to work on
              small projects in my free time.{" "}
            </p>
          </Container>
        </Container>
      </main>
    </div>
  );
}
