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
React é uma biblioteca que pode ser lido como um framework a partir das dependências que são instaladas e executadas junto dela.

`npm init vite@latest` -> Iniciar o vite na pasta do projeto.
Depois selecionar o react como framework

Quando escrevemos HTML dentro do `app.tsx` ele tem que ser encapsulado por uma tag ou num elemento vazio `<> </>` porque se não vai dar erro na "compilação", não sei se essa a expressão correta. 


## Aula 2 - Crie componentes

### Objetivos
* Entender a dinâmica de importação e exportação em React;
* Criar componentes em React, que são essenciais para a construção de interfaces de usuário reutilizáveis e modulares;
* Praticar a estruturação de projetos React, organizando componentes em pastas e arquivos.

### Pontos Importantes
Para poder importar os componentes e utiliza-los tem que aprender o que alterar no `main.tsx`.


```ts
export {
    PI
}

export default nomes;
```
Existem duas formas de importação de arquivos, a primeira nós temos que fazer a importação de acordo como for nomeado no arquivo para funcionar, a segunda, quando usamos o export default podemos usar qualquer nome para fazer a importação.

Uma coisa que eu fico meio confuso, talvez eu tenha que assistir essa aula amanhã de novo, é a estrutura do react, é criado uma constante que vai possuir uma arrow function e dentro dessa função temos uma propriedade chamada return onde dentro dela colocamos o HTML, e também nessa mesma estrutura podemos colocar o Java Script.

Parece que é isso mesmo, o `jsx` e o `tsx` no caso vão poder receber esses elementos, mas ai temos que ter alguns cuidados com a escrita do html, por exemplo para colocar uma `class` em uma tag temos que usar o `className` para não ocorrer uma confusão com o termo `class` do JavaScript.

A estrutura para criar components no react é criar a pasta `components`, dentro dela a pasta `NomeComponent`, e dentro dela criar dois arquivos um o `index.jsx(tsx)` que vai ter o HTML e o JavaScript e o outro `nomeComponent.css` que vai ter a estilização.

Importa o `CSS` para o `index` e depois importa o `index` para o `app.jsx(tsx)` e chama ele como se fosse uma tag customizada igual no `vueJS`, `<NomeComponent />`

Lembrando que o nome da pasta e o nome da tag customizada tem que começar com letra maiúscula.

Não necessariamente as funções criadas precisam ser nomeadas, podem ser feitas arrow functions anônimas e functions anônimas direto no `export default` 

## Aula 3 - Manipule estado e eventos
### Objetivos
* Assimilar o conceito de reatividade no React;
* Iniciar e atualizar o estado;
* Compreender como o estado pode afetar a renderização dos componentes;
* Configurar e gerenciar eventos;
* Passar argumentos para manipuladores de eventos.

### Pontos Importantes
Reatividade - Atualizar um valor e ele já ser integrado na utilização pelo usuário.
Também existem props aqui no React. Só que a forma que está sendo trabalhada aqui é diferente.

variável [valorAtual(nome da variável), atualizaValor] = valorInicial
`let [materiaA, setMateriaA] = useState(0);`

Desestruturação dos eventos. Em vez de usar o evento.target.value, dessa forma reduz o código.  
`({target} => setMateriaA(Number(target.value)))`

O conceito de imutabilidade é essencial para o React, porque é feita a atualização dos valores por meio de um efeito memória de comparação do valor anterior com o valor atual.

## Aula 4 - Utilize a função useEffect
### Objetivos
* Conceituar useEffect e hook;
* Especificar variáveis ou estados que devem ser monitorados para acionar a execução do código dentro do useEffect;
* Escolher as dependências para garantir que o código seja executado quando necessário e evite loops infinitos;
* Assimilar como o useEffect se relaciona com o ciclo de vida do componente React;
* Executar código quando o componente é montado, atualizado ou desmontado.

### Pontos Importantes
Existem diversas funções no React que começam com `use` elas são funções que acompanham o estado do HTML com o DOM
`useEffect` -> Função do react que é executada a partir da mudança do estado, também funciona com props.

```ts
useEffect(() => {
      função  
    },[lista de dependências])
```
Essa estrutura vai dizer que tão ação vai ocorrer quando um valor especifico da lista de dependências for alterado. Quando não tem uma lista de dependências é executado quando o React inicializa e a qualquer alteração de estado que aconteceu.
Podem existir vários useEffect no código. A lista de dependências pode ter vários valores.
`[]` -> Lista de dependências vazia, vai executar a função somente quando for montada a página.

```ts
useEffect(() => {
      função
      
      return () => {
        console.log ("O componente finalizou")
      }
    },[])
```
Escrevendo dessa forma com o `return` vamos adicionar uma função que vai ser executada quando o componente for desmontado.

Não construir estados com o `let` não é para se permitir fazer as alterações diretamente.

Ciclo de vida dos componentes
* mount
* update
* onmount

## Aula 5 - Renderize listas
### Objetivos

### Pontos Importantes

## Aula 6 - Explore o CSS Modules
### Objetivos

### Pontos Importantes

## Tarefa
### Objetivos

### Pontos Importantes
