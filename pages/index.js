import Head from "next/head";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baykam Say</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Row style={{ minHeight: "100vh", paddingTop: "56px" }}>
            <Col
              md={6}
              style={{
                display: "flex",
                flexDircetion: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/baykam-say.png"
                alt="Me"
                rounded
                style={{ maxWidth: "350px" }}
              />
            </Col>
            <Col
              md={6}
              style={{
                display: "flex",
                flexDircetion: "column wrap",
                // flexWrap: "wrap",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                // textAlign: "center",
              }}
            >
              <h1>Hello, I'm Baykam.</h1>
              <h3>
                I am a computer engineering student at Bilkent University.
              </h3>
              <Button variant="outline-primary">Download my CV</Button>

              <Row>
                <a
                  href="https://twitter.com/BaykamSay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logos/twitter-brands.svg"
                    alt="Twitter"
                    width={32}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/baykam-say/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "1rem" }}
                >
                  <Image
                    src="/logos/linkedin-brands.svg"
                    alt="Linkedin"
                    width={32}
                  />
                </a>
                <a
                  href="https://github.com/baykamsay"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "1rem" }}
                >
                  <Image
                    src="/logos/github-brands.svg"
                    alt="Github"
                    width={32}
                  />
                </a>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
