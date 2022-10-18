import React from 'react';
import Tablo from "./Tablo";
import Button from "./Button";

type CountType = {
    count: number
    error: string
    setCount: (value: number) => void
    setEditMode: (value: boolean) => void
    minValue: number
    maxValue: number


}

const Counter = (props: CountType) => {
    const {count, error, setCount, setEditMode, minValue, maxValue} = props
    const changeSet = () => {
        setEditMode(true)
    }
    const styleCount='count'+ ' ' + (count===maxValue?'countError':'')
    return (
        <div className='container'>
            <div>
                <div className='tablo'>
                    <Tablo count={count} error={error} style={styleCount}/>

                </div>
                <div>
                    <Button callback={() => setCount(count + 1)} style={'button'} disabled={count === maxValue}>
                        <p>incr</p>
                    </Button>
                    <Button callback={() => setCount(minValue)} style={'button'} disabled={count === minValue}>
                        <p>reset</p>
                    </Button>
                    <Button callback={changeSet} style={'button'} disabled={false}>
                        <p>set</p>
                    </Button>


                </div>


            </div>


        </div>
    );
};

export default Counter;