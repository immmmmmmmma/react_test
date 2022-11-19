/*eslint-disable*/
//Lint 끄는 기능

import React, { useState } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {

  // let post = '인천 공부 맛집';
  let [글제목, 글제목변경] = useState(['코딩 공부 추천', 'javascript 공부하는 법', '보기좋은 레이아웃은?']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  // document.querySeleter().innerHtml...

  return ( 
    <div className="App"> 
        <div className="black_nav">
          <h4 style={ {color : 'gray', fontSize : '16px'} }>BLOG</h4>
        </div>


        <button onClick={()=>{

          let copy = [...글제목];
          copy[0] = '보기좋은 레이아웃';
          글제목변경(copy);
        }}>글수정</button>

        {/* <div className='list'>
          <h4>{ 글제목[0] }</h4>
          <p> date </p>
        </div>
        <div className='list'>
          <h4>{ 글제목[1] } <span></span> </h4>
          <p> date </p>
        </div>
        <div className='list'>
          <h4>{ 글제목[2] } </h4>
          <p> date </p>
        </div> */}
        {/* 컴포넌트 */}
        {
          글제목.map(function(a, i){
            return (
              <div className='list' key={i} >
              <h4 onClick={ ()=>{ setModal(!modal) } } >
                { 글제목[i] } 
                <span onClick={ () => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy) 
                  }}>👍</span> {좋아요[i]}
              </h4>
              <p> date </p>
            </div>
            )
          })
        }


        { 
          modal == true ? <Modal></Modal> : null
        }

    </div>
  );
}

function Modal (){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
