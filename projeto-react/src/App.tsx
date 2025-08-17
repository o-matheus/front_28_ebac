
// Para evitar a duplicação de nomes na importação é só colocar o nome de index no componente na pasta que o react já procura automaticamente para a pessoa.
import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)

  return(
    <div>
      {/*  Pra chamar o componente é igual ao vueJS, só colocar a tag com um nome de componente customizado. */}
      <Perfil nome="Matheus Aguiar" endereço="https://github.com/o-matheus.png" />
      <ReposList />
      
      {formularioVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button>
    </div>
  )
}

export default App
