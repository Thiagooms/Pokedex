/*
Logica da programação

1- Quando clicar no pokémon da listagem temos que esconder o cartao do pokémon aberto e mostrar o cartão do correspondente ao que foi selecionado na listagem

2- Para isso teremos que trabalhar com o cartão e a navegação

3- Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

4- Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons.

------------------------------------------------------

- Remover a classe aberto só do cartão que está aberto

- Depois, ao clicar em pokémon da listagem pegamos o id desse pokémon pra saber qual o cartão mostrar

-Remover a classe ativa que marca o pokémon selecionado

-Adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variaveis no JS para trabalhar com elementos da tela

//criar uma variavel com o elemento const, vai deixar aquela variavel armazenada ali sem poder fazer alterações com a mesma


const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir) 
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })    
})



