# Introdução ao React

## Menu
[Aula 1 - Conheça o JSX](#aula-1---conheça-o-jsx)  
[Aula 2 - Crie componentes](#aula-2---crie-componentes)  
[Aula 3 - Manipule estado e eventos](#aula-3---manipule-estado-e-eventos)  
[Aula 4 - Utilize a função useEffect](#aula-4---utilize-a-função-useeffect)  
[Aula 5 - Renderize listas](#aula-5---renderize-listas)  
[Aula 6 - Explore o CSS Modules](#aula-6---explore-o-css-modules)  
[Tarefa](#tarefa)  

## Aula 1 - Conheça o JSX

### Objetivos
* Compreender o que é JSX e como ele é usado para criar elementos de interface do usuário no React;
* Utilizar fragmentos em JSX para envolver múltiplos elementos sem a necessidade de uma div ou outro contêiner;
* Explorar como as expressões JSX condicionais funcionam.

### Pontos Importantes
React é uma biblioteca que pode ser considerada um framework devido às dependências que são instaladas e executadas junto com ela.

`npm init vite@latest` → Inicia o Vite na pasta do projeto.  
Depois, selecione o React como framework.

Quando escrevemos HTML dentro do `app.tsx`, ele precisa ser encapsulado por uma tag ou por um fragmento vazio `<> </>`, caso contrário ocorrerá um erro de compilação.

## Aula 2 - Crie componentes

### Objetivos
* Entender a dinâmica de importação e exportação em React;
* Criar componentes em React, que são essenciais para a construção de interfaces de usuário reutilizáveis e modulares;
* Praticar a estruturação de projetos React, organizando componentes em pastas e arquivos.

### Pontos Importantes
Para importar e utilizar componentes, é necessário saber o que alterar no `main.tsx`.

```ts
export {
    PI
}

export default nomes;
```
Existem duas formas de importação de arquivos:  
Na primeira, é preciso importar exatamente como foi nomeado no arquivo.  
Na segunda, quando usamos o `export default`, podemos usar qualquer nome para importar.

Uma dúvida comum é sobre a estrutura do React: cria-se uma constante que recebe uma arrow function e, dentro dessa função, temos um `return` onde colocamos o HTML. Também é possível incluir JavaScript nessa estrutura.

O `jsx` e o `tsx` permitem receber esses elementos, mas é preciso ter alguns cuidados com a escrita do HTML. Por exemplo, para adicionar uma classe em uma tag, usamos `className` para evitar conflito com o termo `class` do JavaScript.

A estrutura para criar componentes no React é: criar a pasta `components`, dentro dela uma pasta `NomeComponent`, e dentro dessa pasta criar dois arquivos: `index.jsx(tsx)`, que terá o HTML e o JavaScript, e `NomeComponent.css`, que terá a estilização.

Importe o CSS para o `index` e depois importe o `index` para o `app.jsx(tsx)`, chamando-o como uma tag customizada, igual no VueJS: `<NomeComponent />`.

Lembre-se de que o nome da pasta e o nome da tag customizada devem começar com letra maiúscula.

Não necessariamente as funções criadas precisam ser nomeadas; podem ser arrow functions anônimas ou funções anônimas direto no `export default`.

## Aula 3 - Manipule estado e eventos
### Objetivos
* Assimilar o conceito de reatividade no React;
* Iniciar e atualizar o estado;
* Compreender como o estado pode afetar a renderização dos componentes;
* Configurar e gerenciar eventos;
* Passar argumentos para manipuladores de eventos.

### Pontos Importantes
Reatividade: atualizar um valor e ele já ser integrado na interface do usuário.  
Também existem props no React, mas a forma de trabalhar pode ser diferente.

Exemplo de uso do useState:
```ts
const [materiaA, setMateriaA] = useState(0);
```

Desestruturação dos eventos: em vez de usar `evento.target.value`, pode-se usar:
```ts
({ target }) => setMateriaA(Number(target.value))
```

O conceito de imutabilidade é essencial no React, pois a atualização dos valores é feita por meio de uma comparação entre o valor anterior e o atual.

## Aula 4 - Utilize a função useEffect
### Objetivos
* Conceituar useEffect e hook;
* Especificar variáveis ou estados que devem ser monitorados para acionar a execução do código dentro do useEffect;
* Escolher as dependências para garantir que o código seja executado quando necessário e evitar loops infinitos;
* Assimilar como o useEffect se relaciona com o ciclo de vida do componente React;
* Executar código quando o componente é montado, atualizado ou desmontado.

### Pontos Importantes
Existem diversas funções no React que começam com `use`; elas acompanham o estado do HTML com o DOM.  
`useEffect` é uma função do React que é executada a partir da mudança do estado, e também funciona com props.

```ts
useEffect(() => {
    // função  
}, [lista de dependências])
```
Essa estrutura indica que uma ação ocorrerá quando um valor específico da lista de dependências for alterado.  
Quando não há lista de dependências, a função é executada quando o React inicializa e a qualquer alteração de estado.  
Podem existir vários useEffect no código.  
A lista de dependências pode ter vários valores.  
`[]` → Lista de dependências vazia: executa a função somente quando a página é montada.

```ts
useEffect(() => {
    // função

    return () => {
        console.log("O componente finalizou")
    }
}, [])
```
Ao usar o `return`, adicionamos uma função que será executada quando o componente for desmontado.

Não construa estados com `let`; não é permitido fazer alterações diretamente.

Ciclo de vida dos componentes:
* mount
* update
* unmount

## Aula 5 - Renderize listas
### Objetivos
* Entender os conceitos e a sintaxe necessários para mapear uma lista de itens e renderizá-las individualmente;
* Dominar o uso de map() para renderização de listas em React;
* Compreender o conceito e a importância de chaves (keys) em elementos renderizados.

### Pontos Importantes
Para renderizar elementos de um array em formato de lista, usamos o `map`, pois além de iterar, ele retorna os elementos.  
Ao renderizar uma lista, o React precisa que cada elemento tenha uma identificação única, chamada `key`.  
Após a apresentação básica dos conceitos, foi feito um exercício com a API do GitHub.

Criamos um elemento reativo com o `useState`, mas como estamos trabalhando com TypeScript, precisamos tipar os elementos que pegamos da API do GitHub.

```ts
const [repos, setRepos] = useState<Repositorio[]>([])
```
No exemplo do professor, era possível trabalhar com os valores da API sem tipagem, mas no TypeScript é necessário criar um tipo customizado para identificar os tipos dos elementos da API.

Exemplo:
```ts
<ul>
    {repos.map(repositorio => (
        <li key={repositorio.name}>
            <b>Nome:</b> {repositorio.name}
        </li>
    ))}
</ul>
```

Tivemos que fazer essa alteração para tirar o erro do código. Aqui está com o nome, mas para todas as informações que pegarmos do JSON, precisamos tipar.

```ts
type Repositorio = {
    name: string
}

const ReposList = () => {
    const [repos, setRepos] = useState<Repositorio[]>([])
    // ...
}
```

```ts
 {carregando && (
            <h1>Carregando...</h1>
        )}
```
Aqui é um curto circuito lógico, o elemento só vai ser renderizado enquanto a condição for verdadeira. 
## Aula 6 - Explore o CSS Modules
### Objetivos

### Pontos Importantes

## Tarefa
### Objetivos
