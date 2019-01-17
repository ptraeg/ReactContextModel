import React from 'react'
import ReactDOM from 'react-dom'
import ModelCallbackExample from './modelCallback/ModelCallbackExample.js'
import ReducerContextExample from './reducerContext/ReducerContextExample.js'
import { useState } from 'react'

import styles from './styles.module.scss'

function App() {
  const [selectedOption, setSelectedOption] = useState('modelCallback')
  const [foo, setFoo] = useState(0)

  function onExampleChange(evt) {
    setSelectedOption(evt.target.value)
  }

  function updateState() {
    setFoo(Date.now())
  }

  return (
    <div className={styles.app}>
      <form>
        <div>Example:</div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="modelCallback"
              checked={selectedOption === 'modelCallback'}
              onChange={onExampleChange}
            />
            Model Callback
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="reducer"
              checked={selectedOption === 'reducer'}
              onChange={onExampleChange}
            />
            Reducer
          </label>
        </div>
      </form>
      {selectedOption === 'modelCallback' && <ModelCallbackExample />}
      {selectedOption === 'reducer' && <ReducerContextExample />}
      The value of foo is: {foo} &nbsp;
      <button onClick={updateState}>Update State</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
