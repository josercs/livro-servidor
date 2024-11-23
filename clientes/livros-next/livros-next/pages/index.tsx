import Head from 'next/head';
import { Menu } from '../components/Menu';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <meta name="description" content="Loja de Livros em Next.js" />
            </Head>

            <Menu />

            <main className={styles.main}>
                <h1 className={styles.title}>Página Inicial</h1>
                <p className={styles.description}>Bem-vindo à Loja de Livros Next.js!</p>
            </main>
        </div>
    );
}
