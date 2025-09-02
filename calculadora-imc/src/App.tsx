import { useEffect, useState } from "react";
import Formulario from "./Components/Formulario"
import Tabela from "./Components/Tabela"
import Faq from "./Components/Faq";

import './global.css'
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [abaAtiva, setAbaAtiva] = useState<'calculadora' | 'faq' | 'tabela'>('calculadora');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const renderConteudoMobile = () => {
    switch(abaAtiva) {
      case 'calculadora':
        return <Formulario />;
      case 'faq':
        return <Faq />;
      case 'tabela': 
        return <Tabela />;
      default:
        return null;
    }
  }



  return (

    <div className="container">
      {isMobile ? (
        <>
          <div className="formFaq">
          {renderConteudoMobile()}
          </div>
          <nav className="menuMobile">
            <button onClick={() => setAbaAtiva('calculadora')}>IMC 🧮</button>
            <button onClick={() => setAbaAtiva('faq')}>FAQ ❓</button>
            <button onClick={() => setAbaAtiva('tabela')}>Tabela 📊</button>
          </nav>
        </>
      ) : (
        <>
        <div className="formFaq">
          <Formulario />
          <Faq />
        </div>
        <Tabela />
        </>
      )}
    </div>
  )
}



export default App
