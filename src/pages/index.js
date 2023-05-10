import { useRouter } from "next/router";
import { Button } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function Home({ name, summary }) {
  const router = useRouter();
  return (
    <>
      <section className={styles.Home}>
        <h1 className={styles.Name}>{name}</h1>
        <div className={styles.Summary}>{summary}</div>
        <div>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/projects")}
          >
            Projects
          </Button>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  // Get your data from an API
  return {
    props: {
      name: "Diego Flores",
      summary: "I don't know who I am and what I'm doing.",
    },
  };
}
