import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Regole() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Regole e Informazioni</title>
      </Head>
      <main className={styles.main}>
        <h1>📜 Regole e Info</h1>
        <p>Qui troverai tutte le informazioni utili per il soggiorno.</p>
      </main>
    </div>
  );
}
