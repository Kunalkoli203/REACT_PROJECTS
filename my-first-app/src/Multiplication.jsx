import ResultButton from './ResultButton.jsx'

function Multiplication({ firstNumber, secondNumber }) {
  const result = firstNumber * secondNumber

  return (
    <section className="operation-card">
      <h2>Multiplication</h2>
      <p>
        {firstNumber} x {secondNumber}
      </p>
      <ResultButton result={result} />
    </section>
  )
}

export default Multiplication
