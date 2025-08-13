import { useEffect, useState } from "react";

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    const alteraNome = (evento: any) => {
        setNome(evento.target.value)
    }

    useEffect(() => {
        console.log("O componente iniciou")
        
        return () => {
            console.log("O componente finalizou")
        }
    },[])

    const renderizaResultado = () => {

        if (materiaA > 0 && materiaB > 0 && materiaC > 0) {
            const soma = materiaA + materiaB + materiaC
            const media = soma / 3

            if (media > 10 || media < 0) {
                return (
                    <p>Verifique as notas digitadas</p>
                )
            }
            else if (media >= 7) {
                return (
                    <>
                        <p>Olá {nome}, você foi aprovado! Sua nota foi {media}</p>
                    </>

                )
            }
            else {
                return (
                    <>
                        <p>Olá {nome}, você foi reprovado. Sua nota foi {media}</p>
                        
                    </>
                )
            }
        }
        else {
            return (
                <p>Digite as notas do aluno</p>
            )
        }

    }

    return (
        <form>
            <input type="text" placeholder="Insira o seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" max={10} onChange={({target}) => setMateriaA(Number(target.value))} />
            <input type="number" placeholder="Nota matéria B" max={10} onChange={({target}) => setMateriaB(Number(target.value))} />
            <input type="number" placeholder="Nota matéria C" max={10} onChange={({target}) => setMateriaC(Number(target.value))} />
            {renderizaResultado()}


        </form>
    )
}

export default Formulario;

