import { useState } from "react";


import './formulario.css';

const Formulario = () => {


    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)

    const imc = (peso: number, altura: number) => {
        let mensagem = '';
        const resultado = (peso / (altura ** 2))
        const resultadoFormatado = resultado.toFixed(1)
        if (resultado >= 40) {
            return mensagem = `O seu imc foi de ${resultadoFormatado}, você está com obesidade grau III .`
        }

        else if (resultado > 0 && resultado < 18.5) {
            return mensagem = `O seu imc foi de ${resultadoFormatado}, você está abaixo do peso.`
        }

        else if (resultado >= 18.5 && resultado < 25) {
            return mensagem = `O seu imc foi de ${resultadoFormatado}, você está com o peso normal.`
        }

        else if (resultado >= 25 && resultado < 30) {
            return mensagem = `O seu imc foi de ${resultadoFormatado}, você está com sobrepeso.`
        }

        else if (resultado >= 30 && resultado < 35) {
            return mensagem = `O seu imc foi de ${resultadoFormatado}, você está com obesidade grau I .`
        }

        else if (resultado >= 30 && resultado < 35) {
            return mensagem = `O seu imc foi de ${resultadoFormatado}, você está com obesidade grau I .`
        }

        else if (resultado >= 35 && resultado < 40) {
            return mensagem = `O seu imc foi de ${resultadoFormatado}, você está com obesidade grau II .`
        }

        else {
            return mensagem = 'Digite seu peso e altura.'
        }
    }


    return (


        <form className="form" action="">
            <div className="formText">
                <h1 className="formTitulo">Calculadora de IMC</h1>
            </div>
            <div className="peso">
                <label className="inputLabel" htmlFor="pesoInput">Peso: </label>
                <input id="pesoInput" type="number" placeholder="kg" onChange={({ target }) => setPeso(Number(target.value))} />
            </div>
            <div className="altura">
                <label className="inputLabel" htmlFor="alturaInput">Altura: </label>
                <input id="alturaInput"  placeholder="m" onChange={({ target }) => setAltura(Number(target.value) / 100)} />
            </div>
            {peso > 0 && altura > 0 ? (
                <span className="formResult">{imc(peso, altura)}</span>
            ) : (
                <span className="formMessage">Digite seu peso e altura.</span>
            )}



        </form>

    )
}

export default Formulario;


