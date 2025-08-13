
// Como importar o caminho de onde esta o arquivo
import './perfil.css'

// Fazendo a desestruturação direto no parametro da função
const Perfil = ({endereço, nome}: any) => {

    // // Fazendo a desetruturação 
    // const {endereço, nome} = props
    return (
        <div>
            {/* No src colocamos o elemento JS sem aspas quando chamamos com as chaves {} */}
            <img className='perfil-avatar' src={endereço} alt="" />
            <h3 className='perfil-titulo' >{nome}</h3>
        </div>
    )
}


export default Perfil;