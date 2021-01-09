import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}


// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});


// mapDispatchToProps가 함수가 아니라 객체면
// bindActionCreators 를 connect 에서 대신 해줍니다.
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
