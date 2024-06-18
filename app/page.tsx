import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {

  redirect("https://tobias-s.vercel.app/");

  return (
    <main className={styles.main}>
      REDIRECTING...
    </main>
  );
}
