import React, {useState} from 'react';
const Input = () => {
    const [txtValue, setTextValue] = useState(""); // 초기값이 빈 배열
    const onChangeFunc = (e) => {
        setTextValue(e.target.value)
    };
    return (
        <div>
            <input type="text" value={txtValue} onChange={onChangeFunc}/>
            <br/>
            <p>{txtValue}</p>
        </div>
    );
};

export default Input;