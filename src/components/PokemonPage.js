import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemonArr => {
      this.setState({
        pokemons: pokemonArr
      })
    })
  }

  changeSearchTerm = (termBeingTyped) => {
    this.setState({
      searchTerm: termBeingTyped
    })
  }

  addOnePokemon = (newPokemon) => {
    let newPokemonsArray = [...this.state.pokemons, newPokemon]
    this.setState({
      pokemons: newPokemonsArray
    })
  }

  render() {
    let theFilteredPokemonArray = this.state.pokemons.filter(pokemonPOJO => {
      return pokemonPOJO.name.includes(this.searchTerm)
    })
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection 
          pokemon={theFilteredPokemonArray}/>
      </Container>
    )
  }
}

export default PokemonPage
