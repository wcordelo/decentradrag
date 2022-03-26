import React, { FC } from "react";
import {atom, selectorFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable, waitForAll} from 'recoil';

type DataAtomType = {[key:string]:string}

const myDataAtom = atom<DataAtomType>({
  key:"unique-key",
  default:{
    "1":"hello world",
    "2":"some stuff"
  }
})

const data2Selector = selectorFamily({
  key:"unique-2",
  get:(id:string)=>({get})=>{
    const res = waitForAll([
      dataAtomSelector("2")
    ])
    return res as any
  }
})

const dataAtomSelector = selectorFamily({
  key:"unique-selector-key",
  get:(id:string)=>({get})=>{
    return get(myDataAtom)[id]
  },
  set: (id: string) => ({ set }, newValue: number | any) => {
    set(myDataAtom, (prevState) => {
    return { ...prevState, [id]: newValue };
    });
  },
})

interface Props {}

const Todos: FC<Props> = () => {
  const loadable = useRecoilValueLoadable(dataAtomSelector("1"))
  const valueOnly = useRecoilValue(data2Selector("1"))	
  return <div>
      {valueOnly[0]}
      {loadable.state==="loading"&&<div>spinner</div>}
      {loadable.state==="hasValue"&&<div>{loadable.contents}</div>}
      {loadable.state==="hasError"&&<div>error</div>}	
  </div>;
};

export default Todos;