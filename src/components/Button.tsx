import React, {ReactNode} from 'react';
type ButtonType={
    callback:()=>void
    children:ReactNode
    style:string
    disabled:boolean

}
const Button:React.FC<ButtonType> = (props) => {
    const {callback,children,disabled,style}=props

    return (
        <button onClick={()=>callback()} disabled={disabled} className={style}>
            {children}
        </button>
    );
};

export default Button;