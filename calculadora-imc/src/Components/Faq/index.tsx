import "./faq.css";

const Faq = () => {



    return (
        <div className="faq">
            <details>
                <summary className="faqTitle">O que é IMC?</summary>
                <p className="faqDescription">IMC significa Índice de Massa Corporal. É um cálculo que relaciona peso e altura para indicar se você está dentro do peso ideal.</p>
            </details>
            <details>
                <summary className="faqTitle">O IMC é suficiente para avaliar a saúde?</summary>
                <p className="faqDescription">O IMC é um indicativo geral, mas não considera fatores como massa muscular ou distribuição de gordura. Consulte um profissional para avaliação completa.</p>
            </details>
            <details>
                <summary className="faqTitle">Como posso melhorar meu IMC?</summary>
                <p className="faqDescription">Adote hábitos saudáveis: pratique atividades físicas, mantenha uma alimentação equilibrada e busque orientação profissional se necessário.</p>
            </details>
            <details>
                <summary className="faqTitle">Qual a diferença entre IMC e percentual de gordura?</summary>
                <p className="faqDescription">O IMC avalia peso em relação à altura, já o percentual de gordura mede a quantidade de gordura corporal. Ambos são importantes para a saúde.</p>
            </details>
        </ div>
    )
}

export default Faq;