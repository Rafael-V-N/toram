// Footer.jsx exibe termos de serviço em todas as páginas do aplicativo.
import styles from '../../css/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Texto de termos de serviço padrão exibido em todas as rotas */}
      <p className={styles.text}>
        Termos de serviço: ao utilizar este site, você concorda com o uso das informações
        para fins de demonstração e aprendizado. O conteúdo é fornecido como está, sem garantias.
      </p>
    </footer>
  );
}

export default Footer;
