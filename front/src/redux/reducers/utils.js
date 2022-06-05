export const reduceReducers =  (...reducers)  => ( state, action ) => 
  reducers.reduce((acc, el) => el(acc, action), state)

const initialFetching = { loading: 'idle', error: null }

export const makeFetchingReducer = actions => (state = initialFetching, action) => {
  switch (action.type) {
    case actions[0]: {
      return { ...state, loading: 'pending' }
    }
    case actions[1]: {
      return { ...state, loading: 'succeded' }
    }
    case actions[2]: {
      return { ...state, error: action.error,loading: 'rejected' }
    }
    default: {
      return state;
    }
  }
}

export const makeSetReducer = actions => (state = [], action) => {
  switch(action.type) {
    case actions[0]:
      return action.payload
    default:
      return state
  }
} 

export const makeCrudReducer = actions => (state = [], action) => {
  switch(action.type) {
    case actions[0]: {
      return state.concat({...action.payload})
    }
    case actions[1]: {
      return state.filter(({id}) => id !== action.payload)
    }
    default:
      return state;
  }
}

export const makeFilterReducer = actions => (state = '', action) => {
  switch(action.type) {
    case actions[0]: {
      return action.payload;
    }
    default:
      return state;
  }
}

export const asyncMac = asyncTypes => ([
  mac(asyncTypes[0]),
  mac(asyncTypes[1], 'payload'),
  mac(asyncTypes[2], 'error'),
])

export const mat = entity => ([
    `${entity}/pending`, 
    `${entity}/fulfilled`, 
    `${entity}/rejected`
    ])

export const mac = ( type, ...argName ) => 
  (...args) => {
    const action = { type }
    argName.forEach( (arg , index) => {
      action[argName[index]] = args[index]
    } )
    return action
  }

