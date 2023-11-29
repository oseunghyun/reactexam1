import React, { useState } from 'react';

// 컴포넌트가 가지는 state가 변경되면 리랜더 된다

const Counter = () => {
  // 0에서 시작
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  console.log('counter 호출');

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncrease2 = () => {
    setCount2(count2 + 2);
  };

  const onDecrease2 = () => {
    setCount2(count2 - 2);
  };

  // state 여러개여도 됨
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>

      <h2>{count2}</h2>
      <button onClick={onDecrease2}>-</button>
      <button onClick={onIncrease2}>+</button>
    </div>
  );
};

export default Counter;
