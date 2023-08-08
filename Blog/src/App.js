import './App.css';
import React, {useState} from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코드 추천', '강남 우동맛집', '파이썬독학']);
  let [num, setNum] = useState(0);
  let [value, setValue] = useState('');

  function goodPlus() {
    setNum(num + 1);
  }

  function changeTitle() {
    let newArray=[...title];
    newArray[0] = '여자 코트 추천'
    setTitle(newArray);
  }

  const handleChange = (e) => {
    setValue(e.nativeEvent.target.value)
  }

  function handleClick() {
    alert(`현재 폼의 값은 ${value}입니다`)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div>
        <p>내용</p>
        <input onChange={handleChange}/>
        <button onClick={handleClick}>확인</button>

        <br/>
        <p>가장 좋아하는 음식은?</p>
        <select onChange={handleChange}>
          <option value='짜장면'>짜장면</option>
          <option value='짬뽕'>짬뽕</option>
          <option value='탕수육'>탕수육</option>
        </select>
        <button onClick={handleClick}>확인</button>

        <br/>
        <p>만족도 조사</p>
        <input name='satisfy' type='radio' value='상'onChange={handleChange} />상
        <input name='satisfy' type='radio' value='중'onChange={handleChange} />중
        <input name='satisfy' type='radio' value='하'onChange={handleChange} />하
        <button onClick={handleClick}>확인</button>


      </div>
      <div className="list">
        <h3> {title[0]} <span onClick={goodPlus}>👍🏻</span> {num} </h3>
        <p>4월 30일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {title[1]} </h3>
        <p>5월 5일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {title[2]} </h3>
        <p>6월 11일 발행</p>
        <hr/>
      </div>

      <button onClick={changeTitle}>제목변경</button>
    
      <Modal></Modal>

    
    </div>


  );
}

function Modal() {
  return(
  <div className='modal'>
  <h2>제목</h2>
  <p>날짜</p>
  <p>상세내용</p>
  </div>
  )
}

export default App;
