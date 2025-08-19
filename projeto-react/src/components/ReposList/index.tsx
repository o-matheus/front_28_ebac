import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

type Repositorio = {
    name: string
    language: string
    html_url: string
    id: number
}

type Props = {
    nomeUsuario: string
}

const ReposList = ({ nomeUsuario }: Props) => {
    const [repos, setRepos] = useState<Repositorio[]>([])
    const [carregando, setCarregando] = useState(true)


    useEffect(() => {
        setCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setCarregando(false)
                    setRepos(resJson)
                }, 3000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {carregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* Aqui é possível fazermos a destruturação para não escrever repositório várias vezes no código. */}

                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li key={id} className={styles.listItem}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name} <br />
                            </div>

                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language} <br />
                            </div>

                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>

                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default ReposList;