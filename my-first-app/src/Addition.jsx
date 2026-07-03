import ResultButton from './ResultButton.jsx'

function Addition({ firstNumber, secondNumber }) {
  const result = firstNumber + secondNumber

  return (
    <section className="operation-card">
      <h2>Addition</h2>
      <p>
        {firstNumber} + {secondNumber}
      </p>
      <ResultButton result={result} />
    </section>
  )
}

export default Addition
