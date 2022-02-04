import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, StateType} from "./bll/themeReducer";

const themes: Array<StateType> = ['dark', 'red', 'default'];

function HW12() {
  const theme = useSelector<AppStoreType, StateType>(state => state.theme)
  const dispatch = useDispatch()

  const onChangeCallback = (value: StateType) => {
    dispatch(changeThemeC(value))
  }

  return (
    <div className={s[theme]}>
      <hr/>
      <h2 className={s[`${theme}-text`]}>
        homeworks 12
      </h2>
      <SuperRadio
        name={'radio'}
        options={themes}
        value={theme}
        onChangeOption={onChangeCallback}
      />
      <hr/>
    </div>
  );
}

export default HW12;
