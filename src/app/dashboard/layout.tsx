import { Header } from "../components/organisms";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <div className={inter.className}>      
        <Header />        
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </section>
  );
}
