import { useEffect,useState } from "react"

  return (
    <div>
        <button  onClick={()=>updateBlog(item)} className="bg-blue-300 text-white p-2  rounded-lg  mt-5">Save</button>
        <button onClick={()=>handleDelete(item.id)} className="bg-cyan-600 text-white p-2  rounded-lg  mt-5">Delete</button>
    </div>
  )


export default BlogItem