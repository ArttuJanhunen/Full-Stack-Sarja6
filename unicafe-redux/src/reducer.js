const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const goodState = {
        good: state.good + 1,
        ok: state.ok,
        bad: state.bad
      }
      state = goodState
      return state
    case 'OK':
      const okState = {
        good: state.good,
        ok: state.ok + 1,
        bad: state.bad
      }
      state = okState

      return state
    case 'BAD':
      const badState = {
        good: state.good,
        ok: state.ok,
        bad: state.bad + 1
      }
      state = badState
      return state
    case 'ZERO':
      const zeroState = {
        good: 0,
        ok: 0,
        bad: 0
      }
      state = zeroState
      return state
    default: return state
  }

}

export default counterReducer