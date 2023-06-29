import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addComment, addReply, deleteReply, editReply } from "../../utils/commentSlice";
import CommentList from './CommentList';
import {generateUniqueId} from "../../utils/helper";




const CommentSection = () => {
  

  const [commentInput, setCommentInput] = useState("")
  const dispatch = useDispatch()
  const commentsData = useSelector((store) => store.comments.commentitems)
  return (
    <div className="lg:w-[70%] w-full dark:text-gray-100 dark:bg-slate-800 duration-100">
    <div className="flex flex-col justify-center gap-2 py-4">
        <div className="flex-col">
            <div className="flex gap-2">
                <span className="flex md:text-xl text-xs text-white justify-center items-center md:w-10 md:h-10 w-6 h-6 rounded-full bg-stone-700">SK</span>
                <input className="border-b border-gray-200 dark:text-black md:p-2 focus:border-black focus:outline-none placeholder-stone-500 md:text-base text-xs w-full" placeholder="Add a comment..." value={commentInput} onChange={
                    (e) => {
                        setCommentInput(e.target.value)
                    }
                } />
            </div>
            <div className="flex mt-[1%] md:ml-[4%] ml-[8%] gap-2">
                <button className="md:text-sm md:px-4 md:py-2 px-2 py-1 text-[0.7rem] hover:bg-stone-200 font-semibold rounded-full" onClick={() => {setCommentInput("")}}>Cancel</button>
                <button className={`md:text-sm md:px-4 md:py-2 px-2 py-1 text-[0.7rem] font-semibold rounded-full ${commentInput ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer" :"bg-stone-100 text-stone-500 dark:text-stone-500"}cursor-not-allowed`} disabled={!commentInput} onClick={() => {
                    dispatch(addComment({
                        id: generateUniqueId(),
                        body: commentInput,
                        author: "shubham",
                        replies: [],
                        control: true
                    }))
                    setCommentInput("")
                }}>Comment</button>
            </div> 
        </div>
        <CommentList data = {commentsData}/>
    </div>
</div>

  )
}

export default CommentSection