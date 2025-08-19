
import styles from './Perfil.module.css';


const Perfil = ({nomeUsuario}: any) => {


    return (
        <header className={styles.header}>
            <img className={styles.header__img} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.titulo} >{nomeUsuario}</h1>
        </header>
    )
}


export default Perfil;