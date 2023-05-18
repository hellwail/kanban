import css1 from './TaskDetail.module.css'
import css2 from '../../assets/styles/Colors.module.css'
import { LIST_COPY, LIST_TYPES } from '../../config'
import { useLocation} from 'react-router-dom'
import { formatDate } from '../../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const css = {...css1, ...css2 }

const TaskDetail = (props) => {
	const { tasks, setTasksMain } = props;
	const location = useLocation();
	const taskId = location.pathname.split('/').pop();
	const task = tasks.find((task) => task.id === taskId);
	const [localDescription, setLocalDescription] = useState(task?.description || '');
  
	function handleStatusChange(event) {
	  const updatedTasks = tasks.map((task) =>
		task.id === taskId ? { ...task, status: event.target.value } : task
	  );
	  setTasksMain(updatedTasks);
	}
  
	function deleteTask(event) {
	  const newTasks = tasks.filter((task1) => task1.id !== taskId);
	  setTasksMain(newTasks);
	}
  
	function handleDescriptionChange(event) {
		const updatedTasks = tasks.map((task) =>
		  task.id === taskId ? { ...task, description: event.target.value } : task
		);
		setTasksMain(updatedTasks);
		setLocalDescription(event.target.value);
	  }
  
	return (
	  <>
		<div className={css.statusRow}>
		  <Link to="/" className={css.homeLink}>
			&#8592; Back
		  </Link>
		  {task && (
			<div className={css.btnGroup}>
			  {LIST_COPY[task.status]}
			</div>
		  )}
		</div>
		<div className={css.wrapper}>
		  {task ? (
			<>
			  <div className={css.header}>
				<h2 className={css.title}>{task.title}</h2>
			  </div>
			  <div className={css.createdAt}>
				{formatDate(task.created)}
			  </div>
			  <div className={css.descriptionCont}>
				<span className={css.staticDescr}> Description: </span>
				<textarea
  					className={css.editableDescr}
  					onBlur={handleDescriptionChange}
 					onChange={(event) => setLocalDescription(event.target.value)}
  					value={localDescription}
				/>
			  </div>
			  <p className={css.label}>change status</p>
			  <select
				onChange={handleStatusChange}
				className={css.select}
				value={task.status}
			  >
				{Object.values(LIST_TYPES).map((type) => (
				  <option key={type} value={type}>
					{type}
				  </option>
				))}
			  </select>
			  <button onClick={deleteTask} className={css.deleteBtn}>
				Delete task
			  </button>
			</>
		  ) : (
			<h2>Task with ID = {taskId} not found</h2>
		  )}
		</div>
	  </>
	);
  };

export default TaskDetail
