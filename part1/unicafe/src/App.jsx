import { useState } from 'react'

const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad

  if (total === 0) {
    return <div>No feedback given</div>
  }

  const average = (clicks.good - clicks.bad) / total
  const positive = (clicks.good / total) * 100

  return (
    <div>
      <div>good {clicks.good}</div>
      <div>neutral {clicks.neutral}</div>
      <div>bad {clicks.bad}</div>
      <div>all {total}</div>
      <div>average {average.toFixed(1)}</div>
      <div>positive {positive.toFixed(1)}%</div>
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleGoodClick = () =>
    setClicks({ ...clicks, good: clicks.good + 1 })
  const handleNeutralClick = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  const handleBadClick = () =>
    setClicks({ ...clicks, bad: clicks.bad + 1 })

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h1>statistics</h1>
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App
