import React from 'react';
import InputNumber from "./InputNumber";
import Button from "./Button";
import  '../App.css'

type EditType = {
    maxValue: number
    minValue: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setEditMode: (value: boolean) => void
    setCount: (value: number) => void

}

const Edit = (props: EditType) => {
    const {maxValue, minValue, setMaxValue, setMinValue, setEditMode, setCount} = props

    const changeMax = (value: number) => {
        setMaxValue(value)

    }
    const changeMin = (value: number) => {
        setMinValue(value)

    }

    const changeSet = () => {
        setEditMode(false)
        setCount(minValue)
        localStorage.setItem('max', JSON.stringify(maxValue))
        localStorage.setItem('min', JSON.stringify(minValue))


    }

    const styleMax = 'input'+ ' '+ (maxValue<minValue||maxValue===minValue?'error':'')
    const styleMin = 'input'+ ' '+ (minValue>maxValue||maxValue===minValue||minValue<0?'error':' ')
    return (
        <div className='container'>
            <div>
                <div className='tablo'>
                    <div>
                        <div  className='inputContainer'>
                            <p className='value'> max Value</p>
                            <InputNumber value={maxValue} callback={changeMax} style={styleMax}/>
                        </div>
                        <div  className='inputContainer'>
                            <p className='value'>min value</p>
                            <InputNumber value={minValue} callback={changeMin} style={styleMin}/>
                        </div>
                    </div>
                </div>
                <div>
                    <Button callback={changeSet} style={'button'} disabled={minValue>maxValue||maxValue===minValue||minValue<0}>
                        <p>set</p>
                    </Button>

                </div>


            </div>



        </div>
    );
};

export default Edit;