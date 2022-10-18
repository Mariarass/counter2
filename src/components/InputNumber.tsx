import React from 'react';

type InputNumberType={
    value:number
    callback:(value:number)=>void
    style:string

}

const InputNumber = (props:InputNumberType) => {
    const {value,callback,style}=props

    return (
        <input type='number' value={value} onChange={(event)=>callback(+event.target.value)} className={style}/>
    );
};

export default InputNumber;