import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const colorStyle = () => {
    if (value1 === 0) {
      return {
        color: 'navy'
      }
    } else if (value1 === 100) {
      return {
        color: 'red'
      }
    }
  }

  const onChangeRangerSingle = (value: number) => {
    if (value < value2 - 5) {
      setValue1(value)
    } else {
      setValue1(value)
      value <= 95 ? setValue2(value + 5) : setValue2(100)
    }
  }

  const onChangeDoubleRanger = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  return (
    <div>
      <hr/>
      <h2>homeworks 11</h2>

      {/*should work (должно работать)*/}
      <div>
        <span style={colorStyle()}>{value1}</span>
        <SuperRange
          value={value1}
          onChangeRange={onChangeRangerSingle}
        />
      </div>

      <div style={{margin: '30px 0', display: 'flex'}}>
        <span style={{color: value1 === 0 ? 'navy': ''}}>{value1}</span>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={onChangeDoubleRanger}
        />
        <span style={{color: value2 === 100 ? 'red': ''}}>{value2}</span>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
