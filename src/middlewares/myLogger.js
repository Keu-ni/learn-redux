const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log('\tPrev', store.getState());
  const result = next(action); // action을 다음 미들웨어로 전달, 없으면 리듀서에 전달

  console.log('\tNext', store.getState());
  return result; // container에서 dispatch 됐을 때 결과물
};

export default myLogger;
