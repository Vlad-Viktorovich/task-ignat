import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import './styleHW6.css'

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        const restoreValue = restoreState("editable-span-value", value)
        setValue(restoreValue)
    };

    return (
        <div>
            <hr/>
            homeworks 6
            <div className='wrapper-hw6'>
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : "enter text..."}}
                    />
                </div>
                <div className='button-hw6'>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </div>
                <hr/>
                <hr/>
            </div>
        </div>
    );
}

export default HW6;