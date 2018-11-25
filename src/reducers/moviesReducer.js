import {Cmd, loop } from 'redux-loop';
import {fetchMovies} from '../effects/effect.movies'

export default (state=[],action) => {
  switch (action.type){

    case 'FETCH_MOVIES':
    return loop(
      state,
      Cmd.run(fetchMovies,{
      args: [],
      successActionCreator: (data)=>{
        console.log(data)
        return {
          type: 'RECIEVE_MOVIES',
          payload: data
        }
      }
    }))

    case 'RECIEVE_MOVIES':
      return [
        ...state,
        ...action.payload.Search
    ]

    default:
      return state;
  }
}
