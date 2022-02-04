export type StateType = 'dark' | 'red' | 'default'
const initState: StateType = 'default';

export const themeReducer = (state = initState, action: ActionsType): StateType => { // fix any
  switch (action.type) {
    case "SET_THEME": {
      return action.value;
    }
    default:
      return state;
  }
};

type ActionsType = changeThemeAction

type changeThemeAction = ReturnType<typeof changeThemeC>

export const changeThemeC = (value: StateType) => {
  return {
    type: "SET_THEME", value
  } as const
}; // fix any