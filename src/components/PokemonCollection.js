import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    let arrayOfComponents = this.props.pokemon.map(pokemonPOJO => {
      return <PokemonCard key={pokemonPOJO.id} pokemon={pokemonPOJO}/>
    })
    return (
      <Card.Group itemsPerRow={6}>
        {arrayOfComponents}
      </Card.Group>
    )
  }
}

export default PokemonCollection
