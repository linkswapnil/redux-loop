import {connect} from 'react-redux';
import movies from 'components/movies'
import {fetchMovies} from 'actions/movies.actions'

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: data => dispatch(fetchMovies(data))
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies || []
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(movies)

