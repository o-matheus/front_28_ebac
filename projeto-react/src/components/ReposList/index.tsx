import { useEffect, useState } from "react";
type Repositorio = {
    name: string
    language: string
    html_url: string
    id: number
}

const ReposList = () => {
    const [repos, setRepos] = useState<Repositorio[]>([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/o-matheus/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setCarregando(false)
                setRepos(resJson)
            }, 3000)
        })
    }, [])

    return (
        <>
        {carregando && (
            <h1>Carregando...</h1>
        )}

        <ul>
            {/* Aqui é possível fazermos a destruturação para não escrever repositório várias vezes no código. */}

            {/* {repos.map(repositorio => ( */}
            {repos.map(({id, name, language, html_url}) => (
                <li key={id}>
                    <b>Nome:</b> {name} <br />
                    <b>Linguagem:</b> {language} <br />
                    <a target="_blank" href={html_url}>Visitar no GitHub</a> <br /><br />
                </li>
            ))}
        </ul>
        
        </>

    )
}

export default ReposList;