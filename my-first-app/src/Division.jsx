import ResultButton from './ResultButton.jsx'

function Division({ firstNumber, secondNumber }) {
  const result =
    secondNumber === 0 ? 'Cannot divide by zero' : firstNumber / secondNumber

  return (
    <section className="operation-card">
      <h2>Division</h2>
      <p>
        {firstNumber} / {secondNumber}
      </p>
      <ResultButton result={result} />
    </section>
  )
}

export default Division
