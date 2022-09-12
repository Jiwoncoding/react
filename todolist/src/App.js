// import React, { Component } from 'react';
import React, {useState} from 'react';
import List from './components/List';
import Form from './components/Form';

// export default class App extends Component {
export default function App() {

  const [ todoData, setTodoData ] = useState([]);
  const [ value, setValue ] = useState("");

  const handleSubmit = (e) => {
    // form안에 input을 전송할 때 페이지 리로드되는 것을 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 추가
    // setState({todoData: [...todoData, newTodo], value: ""});
    setTodoData(prev=>[...prev, newTodo]);
    setValue("");
  };

    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          <List todoData={todoData} setTodoData={setTodoData} />
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

        </div>
      </div>
    )
  }
