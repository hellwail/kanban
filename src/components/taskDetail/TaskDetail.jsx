import css1 from './TaskDetail.module.css'
import css2 from '../../assets/styles/Colors.module.css'
import { LIST_COPY, LIST_COLORS, LIST_TYPES } from '../../config'
import { useMatch } from 'react-router-dom'
import { formatDate } from '../../utils'
import { Link } from 'react-router-dom'
import classNames from 'classnames'


const css = {...css1, ...css2 }

const TaskDetail = props => {
	debugger
	const { tasks, setTasksMain } = props
	const url = useMatch()
	const { taskId } = url.params
	console.log(tasks)
	const task = tasks.find(task => task.id === taskId)
	let btnGroupClasses;
	console.log(task)
	
	
	function handleStatusChange(event) {
		const updatedTasks = tasks.map(task => {
			if (taskId === task.id) {
				return { ...task, status: event.target.value }
			}
			return task
		})
		setTasksMain(updatedTasks)
	}
	function deleteTask(event) {

		console.log(tasks)

		const newTasks = tasks.filter(task1 => taskId !== task1.id)
		console.log("Новые задачи")
		console.log(newTasks)
		setTasksMain(newTasks)

	}

	function handleDescriptionChange(event) {
		console.log(tasks)
		let newTasks = []
		tasks.map(task1 => {
			if (taskId !== task1.id)
				newTasks.push(task1)
			else {
				task1.description = 'hi'
				console.log(event.target)
				task1.description = event.target.value
				console.log(event.target.value)
				newTasks.push(task1)
			}
			return null
		})
		console.log(newTasks)
		setTasksMain(newTasks)		
	}
	
	return (
		<>
		<div className={css.statusRow}>
				<Link to='/' className={css.homeLink}> &#8592; Back</Link>
				{typeof task !== 'undefined' && ( 
				<div className={btnGroupClasses} style={{ }}>{LIST_COPY[task.status]}</div> 
				)}
			</div>
		<div className={css.wrapper}>
			
			{typeof task !== 'undefined' && (
				<>
				fdgfgfdgfdgdfg
					<div className={css.header}>
						<h2 className={css.title}>{task.title}</h2>
					
					</div>
					<div className={css.createdAt}>{formatDate(task.created)}</div>
					<div className={css.descriptionCont}>
						<span className={css.staticDescr}> Description: </span>
						<textarea className={css.editableDescr} onBlur={handleDescriptionChange} >{task.description || "empty"}</textarea>
					</div>
					<p className={css.label}>change status</p>
					<select onChange={handleStatusChange} className={css.select} value={task.status} name="" id="">
						{Object.values(LIST_TYPES).map(type => {
							return <option key={type} value={type}>{type}</option>
						})}

					</select>
					<button onClick={deleteTask} className={css.deleteBtn}>Delete task</button>
				</>
			)}
			{typeof task === 'undefined' && (
				<h2>
					Task with ID = {taskId} not found
				</h2>
			)}


		</div>
		</>
	)
}

export default TaskDetail
