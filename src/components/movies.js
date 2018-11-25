import React from 'react';

export default class MoviesContainer extends React.Component{

  componentWillMount(){
    this.props.fetchMovies();
  }

  renderList(){
    return this.props.movies.map(movie =>
      (<li key={movie.imdbID}>{movie.Title}</li>)
    )
  }

  render() {
    return (
      <div>
        <h1>Movies Component</h1>
        {this.renderList()}
      </div>
    )
  }
}
