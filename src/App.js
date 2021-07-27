import { useSelector, useDispatch } from 'react-redux'
import allActions from './store/actions'

import { wrapper } from "./store/store";

function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick = { () => dispatch(allActions.counterActions.incrementar())}>Incrementar</button>
      <button onClick = { () => dispatch(allActions.counterActions.decrementar())}>Decremetar</button>
    </div>
  )
}

export default wrapper.withRedux(App);
