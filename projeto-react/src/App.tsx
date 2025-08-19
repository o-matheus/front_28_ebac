
// Para evitar a duplicação de nomes na importação é só colocar o nome de index no componente na pasta que o react já procura automaticamente para a pessoa.
import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <div>
      <input type="text" onBlur={({ target }) => setNomeUsuario(target.value)} />
      {/*  Pra chamar o componente é igual ao vueJS, só colocar a tag com um nome de componente customizado. */}
      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </div>
  )
}

export default App
