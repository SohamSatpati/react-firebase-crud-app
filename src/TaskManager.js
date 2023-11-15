import './taskManager.css'
import Task from './Task'
import AddTask from './AddTask'
import {useEffect, useState} from 'react'
import { collection,query,orderBy,onSnapshot } from 'firebase/firestore'
import {db} from './Firebase'

function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() =>{
    const q = query(collection(db,'tasks'),orderBy('created','desc'))
    onSnapshot(q, (querySnapshot) =>{
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='taskManager'>
      <header>Task Manager</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add Task
        </button>
        {tasks.length > 0 ? ( <div className='taskManager__tasks'>
     {tasks.map((task) =>(
      <Task
      id={task.id}
      key={task.id}
      completed={task.data.completed}
      title={task.data.title}
      description={task.data.description} 
      />
     ))}
        </div>) : (<p>No Task Found!</p>)}
       
      </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TaskManager
