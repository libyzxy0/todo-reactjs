import { InputBox, TodoCard } from './components';
import { useState, useEffect } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todolists')) || [];
    return storedTodos;
  });
  const randomString = () => Math.random().toString(36).substr(2, 6);
  
  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todolists', JSON.stringify(updatedTodos));
  };

  const handleEdit = (id) => {
    // Implement edit logic as needed
    alert('Edit functionality to be implemented');
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todolists', JSON.stringify(updatedTodos));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) {
      alert('Please input todo!')
      return;
    }
    const data = {
      id: randomString(), 
      text, 
      isCompleted: false
    };

    setTodos(prevTodos => [...prevTodos, data]);
    localStorage.setItem('todolists', JSON.stringify([...todos, data]));

    setText('');
  };
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todolists')) || [];
    setTodos(storedTodos);
  }, []);
  
  return (
    
    <div className="bg-gray-800 h-screen w-full">
      <h1 className="text-orange-400 text-center font-extrabold text-3xl pt-16">Simple ToDo App</h1>
      <p className="text-white text-center font-medium">Made by libyzxy0.</p>
      <div className="flex justify-center mb-12 mt-6">
        <hr className="w-[90%] border-1 h-0 border-gray-700"/>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-16">
        <InputBox onSubmit={ handleSubmit } setText={setText} value={text} />
        <div className="w-full flex flex-col items-center mt-10">
        
        {todos.map((element, index) => (
        <TodoCard key={element.id + "-" + index} text={element.text} id={element.id} delete={(id) => handleDelete(id) } edit={(id) => handleEdit(id)} completed={ (id) => handleComplete(id)} isCompleted={element.isCompleted} />
      ))}
        
          
        </div>
      </div>
    </div>
  )
}