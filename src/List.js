import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list,handleClear,handleTrash,handleEdit}) => {
  return <div className="grocery-container">
    <div className="grocery-list">
      {
        list.map((entry,i)=>{
          const {value,id} = entry
          return<article key={id} className="grocery-item">
            <p className="title">{value}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={()=>handleEdit(id)}><FaEdit /></button>
              <button className="delete-btn" onClick={()=>handleTrash(id)}><FaTrash /></button>
            </div>
          </article>
        })
      }
    </div>
    <button className="clear-btn" onClick={handleClear}>Clear Items</button>
  </div>
}

export default List
