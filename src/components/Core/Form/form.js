import React from 'react'
import Input from './FormItems/input';

const Form = ({items}) => {

  return (
    <>
        <form>
            {formFiled(items)}  
        </form>
    </>
  )
};

const formFiled = (items) =>{
    // const items = items;
    return (
        <>
            {items?.map((item)=>{
                const {title, type, id} = item;
                return filedformat(type, title)
            })}
        </>
    );    
}

const filedformat =  ( type, placeholder, disabled, onChange, onClick ) => {
    let item = null;
    switch (type) {
        case "input":
            item = <Input />;
            break;
        // default:
        //     item = (
        //         <Input
        //             placeholder={placeholder}
        //             style={style}
        //             size={size}
        //             disabled={disabled}
        //             readOnly={readOnly}
        //             onBlur={onBlur}
        //             onChange={onChange}
        //         />
        //     );
    }
    return item;
};



export default Form;