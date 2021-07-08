import React from 'react'
import {useRecoilState} from 'recoil'
import { countState } from '../store/countState'

function ComponentC() {

  const[count,setCount] = useRecoilState(countState)

  return (
    <div>
      <p>コンポーネントCですよ</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default ComponentC
