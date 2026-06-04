// App.js monta a navegação principal do site e garante que o footer apareça em todas as páginas.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './paginas/Home';
import InfoPage from './paginas/InfoPage';
import FormPage from './paginas/FormPage';
import Footer from './componentes/layout/Footer';

function App() {
  return (
    // BrowserRouter gerencia o histórico de navegação no cliente
    <BrowserRouter>
      {/* Routes define as URLs disponíveis e os componentes que são renderizados em cada rota */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      {/* Footer é renderizado fora do Routes para aparecer em todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
