import { useEffect, useState } from "react";


import './formulario.css';



const Formulario = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleAlturaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value.replace(/\D/g, '');
        setAltura(valor);
    };

    const handlePesoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value.replace(/\D/g, '');
        setPeso(valor);
    };

    const formatarCampo = (valor: string) => {
        if (!valor) return '';
        return `${valor.slice(0, valor.length - 2)},${valor.slice(-2)}`
    }

    useEffect(() => {
        const pesoNumero = Number(peso.replace(/\D/g, '')) / 100;
        const alturaNumero = Number(altura.replace(/\D/g, '')) / 100;

        if (!pesoNumero || !alturaNumero) {
            setMensagem('Digite seu peso e altura');
            return
        }

        const resultado = (pesoNumero / (alturaNumero ** 2))
        const resultadoFormatado = resultado.toFixed(1)


        if (resultado >= 40) {
            setMensagem(`O seu imc foi de ${resultadoFormatado}, você está com obesidade grau III.`);
        } else if (resultado > 0 && resultado < 18.5) {
            setMensagem(`O seu imc foi de ${resultadoFormatado}, você está abaixo do peso.`);
        } else if (resultado >= 18.5 && resultado < 25) {
            setMensagem(`O seu imc foi de ${resultadoFormatado}, você está com o peso normal.`);
        } else if (resultado >= 25 && resultado < 30) {
            setMensagem(`O seu imc foi de ${resultadoFormatado}, você está com sobrepeso.`);
        } else if (resultado >= 30 && resultado < 35) {
            setMensagem(`O seu imc foi de ${resultadoFormatado}, você está com obesidade grau I.`);
        } else if (resultado >= 35 && resultado < 40) {
            setMensagem(`O seu imc foi de ${resultadoFormatado}, você está com obesidade grau II.`);
        }

    }, [peso, altura])





    return (


        <form className="form">
            <div className="formText">
                <h1 className="formTitulo">Calculadora de IMC</h1>
            </div>
            <div className="peso">
                <label className="inputLabel" htmlFor="pesoInput">Peso: </label>
                <input value={formatarCampo(peso)} id="pesoInput" type="string" placeholder="kg" onChange={handlePesoChange} />
            </div>
            <div className="altura">
                <label className="inputLabel" htmlFor="alturaInput">Altura: </label>
                <input value={formatarCampo(altura)} id="alturaInput" type="string" placeholder="m" onChange={handleAlturaChange} />
            </div>
            <span className="formMessage">{mensagem}</span>
        </form>

    )
}

export default Formulario;


