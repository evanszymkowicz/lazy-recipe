import React, { Component } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default class RecipeList extends Component {
  render () {
    return (
      <React.Fragment>
        <RecipeSearch />
        <Recipe />
      </React.Fragment>
    )
  }
}
