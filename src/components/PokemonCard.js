import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imageToggle: false 
  }

  handleClick = (evt) => {
    this.setState(prevState => {
      return {
      imageToggle: !prevState.imageToggle
      }
    })
  }

  render() {

    let {name, hp, sprites} = this.props.pokemon
    let {back, front} = sprites
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.imageToggle? front:back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
