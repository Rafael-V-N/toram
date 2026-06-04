// FormPage.js contém o formulário de personagem com campos de nome, classe e tempo de jogo.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/FormPage.module.css';

function FormPage() {
  // formData armazena os valores dos campos do formulário
  const [formData, setFormData] = useState({ name: '', characterClass: 'samurai', timePlayed: 'menos-de-1-mes' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '' });

  // Atualiza o estado do formulário sempre que um campo mudar
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  // Envia o formulário localmente e marca como enviado
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação simples: nome é obrigatório
    const newErrors = {};
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({ name: '' });
    setSubmitted(true);
  };

  return (
    <main className={styles.formPage}>
      <section className={styles.header}>
        <h1 className={styles.title}>Formulário de Personagem</h1>
        <p className={styles.subtitle}>
          Escolha um nome e uma classe para o seu personagem. A classe pode ser Samurai, Guerreiro ou Mago.
        </p>
      </section>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Nome
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Digite seu nome"
              required
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className={styles.errorMessage} role="alert">
                {errors.name}
              </span>
            )}
        </label>

        <label className={styles.label} htmlFor="characterClass">
          Classe
          <select
            id="characterClass"
            name="characterClass"
            value={formData.characterClass}
            onChange={handleChange}
            className={styles.input}
            required
          >
            <option value="samurai">Samurai</option>
            <option value="guerreiro">Guerreiro</option>
            <option value="mago">Mago</option>
          </select>
        </label>

        <label className={styles.label} htmlFor="timePlayed">
          Tempo de jogo
          <select
            id="timePlayed"
            name="timePlayed"
            value={formData.timePlayed}
            onChange={handleChange}
            className={styles.input}
            required
          >
            <option value="menos-de-1-mes">Menos de 1 mês</option>
            <option value="1-a-6-meses">1 a 6 meses</option>
            <option value="mais-de-6-meses">Mais de 6 meses</option>
          </select>
        </label>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>

        {submitted && !errors.name && (
          <p className={styles.successMessage}>
            Personagem criado: {formData.name} ({formData.characterClass}) - Tempo de jogo: {formData.timePlayed.replace(/-/g, ' ')}.
          </p>
        )}
      </form>

      <Link className={styles.backLink} to="/">
        Voltar para Home
      </Link>
    </main>
  );
}

export default FormPage;
