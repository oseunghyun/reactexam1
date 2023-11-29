const OddEventResult = ({ count }) => {
  console.log(count);
  console.log('rerender');
  // 부모 요소의 state가 바뀌면
  // 자식 요소인 oddEventResult도 변경됨
  // return {(count % 2 === 0) ? '짝수' : '홀수'};
  return count;
};

export default OddEventResult;
