import { Route, Routes} from 'react-router-dom'
import Board  from '../board/board'
import css from './Main.module.css'
import TaskDetail from '../taskDetail/TaskDetail'

const Main = props => {	
	return (
		<main className={css.main} >
		<Routes>
			<Route exact path={'/'} element = { <Board {...props} />}/>
				
				
			<Route path={'/tasks/:taskId'} element = { <TaskDetail  {...props}/>}/>
				
			
		</Routes>
		</main>
	)
}

export default Main
