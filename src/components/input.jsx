import "./input.css"
import React, { memo } from 'react';

const Input = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();//맴버변수를 정의한다음 원하는 리액트 컴포넌트에 ref로 연결한다
    
    const onSubmit = event =>{
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    }
    return (
        <form ref = {formRef}className='input' onSubmit={onSubmit}>
            <input 
            ref = {inputRef}
            type="text"
            className="input_name" 
            />
            <button className="input_add">Add</button>
        </form>
    );
    

})

export default Input;