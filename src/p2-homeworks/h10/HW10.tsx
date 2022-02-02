import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import loader from './../../images/Spinner-1s-200px.svg'

function HW10() {
  // useSelector, useDispatch
  const loading = useSelector<AppStoreType, StateType>(state => state.loading)
  const dispatch = useDispatch()

  console.log(`loading: ${loading.isLoading}`)

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {dispatch(loadingAC(false))}, 3000)
    // console.log('loading...')
  };

  return (
    <div>
      <hr/>
      <h2>homeworks 10</h2>

      {/*should work (должно работать)*/}
      {loading.isLoading
        ? (
          <div style={{height: '70px'}}><img src={loader} alt={'loader'}/></div>
        ) : (
          <div style={{height: '70px'}}>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
