import React from 'react'

const Search = props => {

  state = {

  }

  let handleChange = (evt) => {
    props.changeSearchTerm(evt.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
