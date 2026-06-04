// Home.js exibe a página inicial com uma imagem representativa e links para as demais páginas do site.
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';
import toramHome from '../imagens/toram-home.jpeg';

const HOME_IMAGE = toramHome;

function Home() {
  return (
    <main className={styles.homePage}>
      <div className={styles.contentWrapper}>
        <section className={styles.leftPanel}>
          <p className={styles.label}>Site Informativo</p>
          <h1 className={styles.heading}>Toram</h1>
          <p className={styles.text}>
            Toram é um MMORPG gratuito desenvolvido pela Asobimo, disponível para Android, iOS e Windows. O jogo se destaca por oferecer um mundo de fantasia em 3D, com estilo anime, exploração em mundo aberto e um sistema de progressão sem classes fixas.
          </p>
          {/* Links de navegação para outras páginas do site */}
          <div className={styles.buttonGroup}>
            <Link className={styles.actionButton} to="/info">
              Ver página informativa
            </Link>
            <Link className={styles.secondaryButton} to="/form">
              Criação de personagem
            </Link>
          </div>
        </section>

        <section className={styles.rightPanel}>
          {/* Imagem local representativa que pode ser trocada futuramente */}
          <img
            className={styles.heroImage}
            src={HOME_IMAGE}
            alt="Imagem representativa do site"
          />
        </section>
      </div>
    </main>
  );
}

export default Home;
