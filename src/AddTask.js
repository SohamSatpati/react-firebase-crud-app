import Modal from "./Modal"
import {useState} from 'react'
import {db} from './Firebase'
import { collection,addDoc,Timestamp } from "firebase/firestore"
import './addTask.css'


function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      await addDoc(collection(db,'tasks'),{
        title:title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form className='addTask' name='addTask' onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTask
