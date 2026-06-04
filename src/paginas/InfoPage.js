// InfoPage.js apresenta detalhes sobre Toram em formato informativo, com imagem e texto explicativo.
import { Link } from 'react-router-dom';
import styles from '../css/InfoPage.module.css';
import toramSelecionar from '../imagens/toram-selecionar.jpeg';

const INFO_IMAGE = toramSelecionar;

function InfoPage() {
  return (
    <main className={styles.infoPage}>
      <section className={styles.topSection}>
        <h1 className={styles.heading}>Toram</h1>
        <p className={styles.description}>
          Neste espaço informativo você encontra um resumo das principais características,
          da história e do motivo pelo qual Toram continua sendo uma opção interessante
          para quem gosta de RPGs online.
        </p>
      </section>

      {/* Bloco de características com lista destacada */}
      <section className={styles.infoBlock}>
        <h2>Principais características</h2>
        <ul className={styles.infoList}>
          <li><strong>Sem sistema de classes tradicionais:</strong> você define seu estilo de combate através das armas, habilidades e atributos que deseja desenvolver.</li>
          <li><strong>Personalização avançada:</strong> o jogo oferece bilhões de combinações de aparência, permitindo criar personagens únicos.</li>
          <li><strong>Combate em tempo real:</strong> os jogadores enfrentam monstros e chefes utilizando ataques, combos e habilidades especiais.</li>
          <li><strong>História envolvente:</strong> a campanha principal possui missões com cenas cinematográficas, diálogos e diversos chefes importantes para derrotar.</li>
          <li><strong>Modo multiplayer:</strong> é possível formar grupos, participar de guildas, negociar itens e enfrentar desafios cooperativos com jogadores do mundo inteiro.</li>
        </ul>
      </section>

      {/* Imagem demonstrativa com legenda explicativa */}
      <section className={styles.imageSection}>
        <img className={styles.infoImage} src={INFO_IMAGE} alt="Imagem demonstrativa informativa" />
      </section>

      {/* Bloco de história do jogo */}
      <section className={styles.infoBlock}>
        <h2>História</h2>
        <p className={styles.description}>
          O mundo de Toram foi devastado por uma grande catástrofe que fragmentou a terra em várias regiões.
          Diferentes povos surgiram após esse evento, e o jogador embarca em uma jornada para desvendar os mistérios
          desse novo mundo enquanto enfrenta monstros, chefes e ameaças cada vez maiores.
        </p>
      </section>

      {/* Bloco de recomendação para jogar */}
      <section className={styles.infoBlock}>
        <h2>Vale a pena jogar?</h2>
        <p className={styles.description}>
          Para quem gosta de MMORPGs com liberdade para criar builds, personalizar personagens e jogar em grupo,
          Toram continua sendo uma das opções mais populares para dispositivos móveis.
          A comunidade destaca a enorme variedade de builds possíveis e a forte interação entre jogadores através de
          guildas e grupos de caça a chefes.
        </p>
        <p className={styles.description}>
          Se você vem do Minecraft com mods ou de RPGs como Final Fantasy, provavelmente vai gostar da liberdade de criação
          de personagens e do sistema de progressão sem classes fixas.
        </p>
      </section>

      <Link className={styles.backButton} to="/">
        Voltar para Home
      </Link>
    </main>
  );
}

export default InfoPage;
