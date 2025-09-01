import Formulario from "./Components/Formulario"
import Tabela from "./Components/Tabela"
import Faq from "./Components/Faq";

import './global.css'
function App() {



  return (

    <>
      <div className="formFaq">
        <Formulario />
        <Faq />
      </div>
      <Tabela />
    </>
  )
}



export default App
