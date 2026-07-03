import Addition from './Addition.jsx'
import Division from './Division.jsx'
import Multiplication from './Multiplication.jsx'
import Subtraction from './Subtraction.jsx'

const firstNumber = 20
const secondNumber = 10

function App() {
  return (
    <main className="app">
      <h1>Math Components</h1>
      <div className="operation-grid">
        <Addition firstNumber={firstNumber} secondNumber={secondNumber} />
        <Subtraction firstNumber={firstNumber} secondNumber={secondNumber} />
        <Multiplication firstNumber={firstNumber} secondNumber={secondNumber} />
        <Division firstNumber={firstNumber} secondNumber={secondNumber} />
      </div>
    </main>
  )
}

export default App
