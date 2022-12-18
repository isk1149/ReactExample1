import React, {useState} from 'react';

// 리액트에서는 동적으로 변경되는 값을 state라 하고, state를 관리하는 함수가 useState()이다.

const Counter = () => {
    // num에 0을 기본값으로 넣고 num을 변경하는 세터함수 setNumber
    const [num, setNumber] = useState(0);
    const increase = () => {
        setNumber(num + 1)
        //num += 1; (X)
    };
    const decrease = () => {
        setNumber(num - 1)
    };
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
};

export default Counter;