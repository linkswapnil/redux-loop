import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configure-store'
import MoviesContainer from 'containers/movies.container';

render(
<Provider store={configureStore()}>
 <MoviesContainer></MoviesContainer>
  </Provider>,
  document.getElementById('root')
)
