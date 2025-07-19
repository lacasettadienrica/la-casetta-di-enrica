import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const sections = [
    { title: 'Regole e info', emoji: '📜' },
    { title: 'Check-in e Check-out', emoji: '📍' },
    { title: 'Wi-Fi', emoji: '📶' },
    { title: 'Supermercati', emoji: '🛒' },
    { title: 'Locali', emoji: '🍽️' },
    { title: 'Spiagge', emoji: '🏖️' },
    { title: 'Esperienze', emoji: '🧭' },
    { title: 'Contatti', emoji: '📞' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>La Casetta di Enrica</title>
      </Head>

      <header className={styles.header}>
        <img src="/logo.png" alt="Logo Casetta di Enrica" className={styles.logo} />
        <h1>Benvenuti nella Casetta di Enrica</h1>
        <p>La vostra guida digitale al soggiorno</p>
      </header>

      <main className={styles.grid}>
        {sections.map((section) => (
          <a href="#" className={styles.card} key={section.title}>
            <span className={styles.emoji}>{section.emoji}</span>
            <h2>{section.title}</h2>
          </a>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>Vi è piaciuto il soggiorno? Lasciateci una recensione! 🌟</p>
      </footer>
    </div>
  );
}
