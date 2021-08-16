import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [list,setList] = useState([])
  const [alert,setAlert] = useState('')
  const [value,setValue] = useState('')
  const [isAlert,setIsAlert] = useState(false)
  const [isEdit,setIsEdit] = useState(false)
  const [edit,setEdit] = useState({})
  const [showModal,setShowModal] =useState(false)
  const [type,setType] = useState('')
  const handleChange = (e)=>{
    setValue(e.target.value)
  }
  const handleClick=(e)=>{
    e.preventDefault()
    
   if(!value){
      setShowModal(true)
        setAlert("Please Enter Value")
        setType("danger")
    }
    else
      {const newList = [...list,{id: new Date().getTime().toString(),value}]
             setList(newList)
             setValue('')
             setIsAlert(true)
              setIsEdit(false)
              setShowModal(true)
              setAlert("Item Added To The List")
              setType("success")
            }
      
  }
  const handleClear = ()=>{
    setIsAlert(false)
    setList([])
    
     setShowModal(true)
     setAlert("Empty List")
     setType("danger")
  }
  const handleTrash = (id)=>{
  
    const newList = list.filter(item=> item.id !== id)
    setList(newList)
    if(list.length === 1){
      setIsAlert(false)
    }
    setShowModal(true)
     setAlert("Item Removed")
     setType("danger")
  }
   const handleEdit = (id)=>{
     list.map(entry=>{
      if(entry.id === id){
        const value=entry.value
        setValue(value)
        setIsEdit(true)
      }
      const newList = list.filter(item=> item.id !== id)
    setList(newList)
    })
  }
    const handleSubmit = (e)=>{
    e.preventDefault()
  }
  const RemoveAlert=()=>{
    setShowModal(false)
  }
  return <section className="section-center">
      {showModal && <Alert alert={alert} RemoveAlert={RemoveAlert} list={list} type={type} />}
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input className="grocery" placeholder="e.g. eggs" type="text" value={value} onChange={handleChange} />
          <button className="submit-btn" type="sumbit" onClick={handleClick}>
            {isEdit?'Edit':'Submit'}
          </button>
        </div>
        {isAlert && <List list={list} handleClear={handleClear} handleTrash={handleTrash} handleEdit={handleEdit} /> }
      </form>
    </section>
}

export default App
