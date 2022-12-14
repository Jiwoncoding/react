import React from 'react'

export default function List({id, title, completed, todoData, setTodoData, provided, sna}) {

  const handleClick = (id) => {
    let newTodoData = todoData.todoData.filter((data)=>data.id !== id);
    console.log('newTodoData', newTodoData);
    // this.setState({todoData: newTodoData});
    setTodoData(newTodoData);
  };

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data)=>{
      if(data.id===id){
        data.completed = !data.completed;
      }
      return data;
    });
    // setState({todoData:newTodoData});
    setTodoData(newTodoData);
  };

  return (
    <div
    key={id}
    {...provided.dragHandleProps}
    ref={provided.innerRef}
    {...provided.dragHandleProps}
    >
   <div className={`${snapshot.isDragging ? " bg-gray-400" : " bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
   <div className='items-center'>
   <input type="checkbox" onChange={()=>handleCompleChange(id)} defaultChecked={false} />{" "}
   <span className={completed ? 'line-through' : undefined}>{title}</span>
   </div>
   <div className='items-center'>
   <button className='px-4 py-2 float-right' onClick={()=>handleClick(id)}>x</button>
   </div>
   </div>
 </div>
  )
}
