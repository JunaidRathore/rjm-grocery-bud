import React, { useEffect } from 'react'

const Alert = ({alert,RemoveAlert,list,type}) => {
 useEffect(()=>{
     const remove= setInterval(()=>{
      RemoveAlert()
    },2000)
    return ()=>{
      clearTimeout(remove)
    }
  },[list])
 return <p className={`alert alert-${type}`}>{alert}</p>
 }

export default Alert
