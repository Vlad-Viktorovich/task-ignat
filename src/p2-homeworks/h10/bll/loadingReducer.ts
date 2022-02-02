export type StateType = {
  isLoading: boolean
}
type ActionTypeType = 'SET_LOADING'
type ActionsType = LoadingAction
// type LoadingAction = ReturnType<typeof loadingAC>
type LoadingAction = {
  type: ActionTypeType
  isLoading: boolean
}

const SET_LOADING = 'SET_LOADING'
const initState = {
  isLoading: false
}

export const loadingReducer = (state: StateType = initState, action: ActionsType): StateType => { // fix any
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state, isLoading: action.isLoading
      }
    }
    default:
      return state
  }
}

export const loadingAC = (isLoading: boolean): LoadingAction => {
  return {
    type: SET_LOADING, isLoading
  } as const
}
