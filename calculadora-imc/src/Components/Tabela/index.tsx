
import './table.css'

const Tabela = () => {

    return (
        <>
            <table className="tableIMC">
                <thead className='tableHead'>
                    <tr>
                        <th>Resultado</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody className='tableBody'>
                    <tr>
                        <td className='textoResultado'>18,4 ou menos</td>
                        <td className='textoDescricao'>Você está abaixo do peso ideal. Procure orientação para melhorar sua alimentação e saúde.</td>
                    </tr>
                    <tr>
                        <td className='textoResultado'>18,5 - 24,9</td>
                        <td className='textoDescricao'>Parabéns! Seu peso está dentro do ideal para sua altura. Continue cuidando da sua saúde.</td>
                    </tr>
                    <tr>
                        <td className='textoResultado'>25 - 29,9</td>
                        <td className='textoDescricao'>Atenção: você está com sobrepeso. Adote hábitos saudáveis e, se possível, busque orientação profissional.</td>
                    </tr>
                    <tr>
                        <td className='textoResultado'>30 - 34,9</td>
                        <td className='textoDescricao'>Obesidade grau I. Cuide da alimentação e pratique atividades físicas. Procure um profissional de saúde.</td>
                    </tr>
                    <tr>
                        <td className='textoResultado'>35 - 39,9</td>
                        <td className='textoDescricao'>Obesidade grau II. É importante buscar acompanhamento médico e nutricional para melhorar sua qualidade de vida.</td>
                    </tr>
                    <tr>
                        <td className='textoResultado'>40 ou mais</td>
                        <td className='textoDescricao'>Obesidade grau III. Risco elevado à saúde. Procure orientação médica especializada o quanto antes.</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default Tabela;