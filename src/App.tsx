import React, {useEffect, useState} from 'react';

import './App.css';
import Edit from "./components/Edit";
import Counter from "./components/Counter";

function App() {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)
    const [error, setError] = useState('')
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        const  max=localStorage.getItem('max')
        const  min=localStorage.getItem('min')
        max&&setMaxValue(JSON.parse(max))
        min&&setMinValue(JSON.parse(min))
        min&&setCount(JSON.parse(min))

    },[])
    return (
        <div className={'App'}>
            {
                (editMode)
                    ?
                    <Edit maxValue={maxValue}
                          minValue={minValue}
                          setMaxValue={setMaxValue}
                          setMinValue={setMinValue}
                          setEditMode={setEditMode}
                          setCount={setCount}
                    />
                    :
                    <Counter
                        count={count}
                        error={error}
                        setCount={setCount}
                        setEditMode={setEditMode}
                        maxValue={maxValue}
                        minValue={minValue}


                    />
            }


        </div>
    );
}

export default App;
