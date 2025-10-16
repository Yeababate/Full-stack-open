import { useState } from 'react'

const Button = ({ onClick, text}) => {
  return (<button onClick={onClick}>{text}</button>)
}

const StatisticLine = ({ text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  if (total === 0) {
    return <div>No feedback given</div>
  }

  const average = (clicks.good - clicks.bad) / total
  const positive = (clicks.good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={clicks.good} />
        <StatisticLine text="neutral" value={clicks.neutral} />
        <StatisticLine text="bad" value={clicks.bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1) + "%"} />
      </tbody>
    </table>
    
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
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      <h1>statistics</h1>
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App
