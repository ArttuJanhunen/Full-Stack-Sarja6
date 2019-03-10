import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'


const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = (id) => {
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    console.log('vote', id)
    props.voteAnecdote(votedAnecdote)
    props.setNotification(`you voted "${votedAnecdote.content}"`, 5)
  }



  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notifications: state.notifications
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdotes