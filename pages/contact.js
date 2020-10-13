import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Baykam Say | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ paddingTop: "56px" }}>
        <Container>
          <p>Hello There</p>
        </Container>
      </main>
    </div>
  );
}
