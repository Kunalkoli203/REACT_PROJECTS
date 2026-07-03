import ResultButton from './ResultButton.jsx'

function Subtraction({ firstNumber, secondNumber }) {
  const result = firstNumber - secondNumber

  return (
    <section className="operation-card">
      <h2>Subtraction</h2>
      <p>
        {firstNumber} - {secondNumber}
      </p>
      <ResultButton result={result} />
    </section>
  )
}

export default Subtraction
