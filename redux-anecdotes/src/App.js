import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import AnecdoteForm from './components/anecdoteForm'
import AnecdoteList from './components/anecdoteList'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {

  useEffect(() => {
    props.initializeAnecdotes()
  }, [])

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)
