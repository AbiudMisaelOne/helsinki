import { useState } from 'react'

const getRandomAnecdote = (props) => {
  return Math.floor(Math.random() * props.length)
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const handleVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const nextAnecdote = () => {
    setSelected(getRandomAnecdote(anecdotes))
  }

  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    return {
      anecdote: anecdotes[index],
      votes: maxVotes
    }
  }

  const mostVoted = getMostVotedAnecdote()

  return (
    <div>
      <h1>Anécdota del día</h1>
      <p>{anecdotes[selected]}</p>
      <p>tiene {votes[selected]} votos</p>
      <Button 
        text="siguiente anécdota" 
        handleClick={nextAnecdote}
      />
      <Button text="Votar" handleClick={handleVote}/>

      <h1>Anécdota con más votos</h1>
      <p>{mostVoted.anecdote}</p>
      <p>tiene {mostVoted.votes} votos</p>
    </div>
  )
}

export default App