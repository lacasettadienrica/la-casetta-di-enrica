// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const sectionLinks = {
  'Regole e info': '/regole',
  'Check-in e Check-out': '/check-in',
  'Wi-Fi': '/wifi',
  'Market': '/market',
  'Locali': '/locali',
  'Spiagge': '/spiagge',
  'Esperienze': '/esperienze',
  'Contatti': '/contatti',
};

export default function Home() {
  const sections = Object.keys(sectionLinks);

  return (
    <div className={styles.container}>
      <Head>
        <title>La Casetta di Enrica</title>
      </Head>

      <header className={styles.header}>
        <img src="/logo-piccolo.png" alt="Logo Casetta di Enrica" className={styles.logo} />
        <h1>Benvenuti nella Casetta di Enrica</h1>
        <p>La vostra guida digitale al soggiorno</p>
      </header>

      <main className={styles.grid}>
        {sections.map((title) => (
          <a href={sectionLinks[title]} className={styles.card} key={title}>
            <span className={styles.emoji}>{getEmoji(title)}</span>
            <h2>{title}</h2>
          </a>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>Vi è piaciuto il soggiorno? Lasciateci una recensione!
