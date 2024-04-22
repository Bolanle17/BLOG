import Header from "./components/Header"
import BlogForm from "./components/BlogForm"
import BlogList from "./components/BlogList"
import { useState } from "react"
import {v4 as uuid4} from "uuid"




function App() {
  const [blog, setBlog] = useState([])
  const [updateBlog, setUpdateBlog] = useState({
    item:{},
    edit:false
  })
  const BlogItem = (item)=>{
    setUpdateBlog({
      item:blog,
      edit:true
    })
  }

  const postHandler = (item)=>{
    item.id = uuid4()
  }

  const deleteHandler =(id)=>{
    if(window.confirm("Are you sure you want to delete")){
      setBlog(blog.filter((item)=>item.id !==id))

    }

  }
  return (
    <>
    <Header/>
    <div>
        <BlogForm postHandler={postHandler} />
        <BlogList blog={blog} deleteHandler={deleteHandler} updateBlog={updateBlog} BlogItem={BlogItem}/>
    </div>
    </>
  )
}

export default App