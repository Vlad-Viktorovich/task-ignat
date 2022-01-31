import {UserType} from "../HW8";

const SORT = 'SORT'
const CHECK = 'CHECK'

export type HomeWorkReducerType = ReturnType<typeof homeWorkReducer>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
  switch (action.type) {
    case SORT: {
      //Рабочие 2 варианта
      // if (action.howToSort === 'up') {
      //   return [...state].sort((a, b)=> a.name>=b.name ? 1 : -1)
      // } else if (action.howToSort === 'down') {
      //   return [...state].sort((a, b)=> a.name<=b.name ? 1 : -1)
      // }
      // return state

      //'up' и 'down' - затипизированы, ничего третьего передать нельзя
      // При совпадении имен сортирут нормально, прописал в тесте
      return [...state].sort((a, b) => {
        if(action.howToSort === 'up') {
          return a.name >= b.name ? 1 : -1
        } else {
          return a.name <= b.name ? 1 : -1
        }
      })
    }
    case CHECK: {
      return state.filter(f => f.age >= action.age)
    }
    default:
      return state
  }
}

type ActionsType = SortActionType | CheckActionType
type SortActionType = ReturnType<typeof sortAC>
type CheckActionType = ReturnType<typeof checkAC>
type howToSortACType = 'up' | 'down'

export const sortAC = (howToSort: howToSortACType) => {
  return {
    type: SORT, howToSort
  } as const
}

export const checkAC = (age: number) => {
  return {
    type: CHECK, age
  } as const
}