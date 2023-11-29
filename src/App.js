// import './App.css';
import MyHeader from './MyHeader';
// import MyFooter from './MyFooter';

function App() {
  let name = '오승현';

  const style = {
    App: {
      backgroundColor: 'black',
    },
    h1: {
      color: 'pink',
    },
    bold_txt: {
      color: 'green',
    },
  };

  const func = () => {
    return 'func';
  };

  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader />
      <header className='App-header'>
        <h1 style={style.h1}>
          안녕 리액트 {name} {func()}
        </h1>
        <b style={style.bold_txt} id='bold_txt'>
          {number}는 : {number % 2 === 0 ? '짝수' : '홀수'}
        </b>
      </header>
    </div>
  );
}

// es 문법
export default App;

// jsx 의 중괄호 안에는 숫자나 문자열만 포함 가능함
// false, arr 랜더링 안됨
