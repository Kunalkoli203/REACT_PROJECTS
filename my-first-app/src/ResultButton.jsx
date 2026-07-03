import { useState } from 'react'

function ResultButton({ result }) {
  const [showResult, setShowResult] = useState(false)

  return (
    <div>
      <button type="button" onClick={() => setShowResult(true)}>
        Result
      </button>
      {showResult && <strong className="result">Answer: {result}</strong>}
    </div>
  )
}

export default ResultButton
