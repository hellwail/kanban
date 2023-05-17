import { useState ,useEffect} from 'react'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/footer';
import data from './/mock.json'


function App() {

  const initialState =JSON.parse(window.localStorage.getItem('tasks')) || data
	const [tasks, setTasks] = useState(initialState)
	useEffect(()=>{
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
	let test = 10;

  return (
    <BrowserRouter>
		<div className='wrapper'>
			<Header />
			<Main tasks = {tasks} setTasksMain={setTasks}/>
			<Footer tasks= {tasks} test={test}/>
		</div>
	</BrowserRouter>
  );
}

export default App;
