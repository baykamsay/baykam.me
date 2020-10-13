import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Baykam Say | Blog</title>
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
