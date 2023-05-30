import React from 'react'
import { useSelector } from 'react-redux';

const Button = ({name}) => {
  
  const searchString = useSelector((state) => state.category.searchString);
  const categoryStatus = useSelector((state) => state.category.categoryStatus);
  return (
    <>
    <button className={` dark:text-blue-800 px-5 py-2 m-2 bg-gray-200 rounded-lg w-max whitespace-nowrap overflow-hidden text-ellipsis block 
  
  ${categoryStatus && searchString==name && "text-yellow-100 bg-slate-800   dark:bg-red-500 dark:text-yellow-50  "}`
  
  }>{name}</button>
  </>
  )
}

export default Button