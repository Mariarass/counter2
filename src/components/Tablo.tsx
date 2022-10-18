import React from 'react';
type TabloType={
    count:number
    error:string
    style:string
}

const Tablo = (props:TabloType) => {
    const {count,error,style}=props
    console.log(style)
    return (
        <div>
            <p className={style}>
                {count}
            </p>

        </div>
    );
};

export default Tablo;