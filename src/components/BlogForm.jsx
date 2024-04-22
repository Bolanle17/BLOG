import { useState } from "react"


function BlogForm({postHandler,}) {
const [tea, setTea] =useState()
const teaHandler = (e)=>{
  setTea(e.target.value)
}

const handleSubmit = (e)=>{
  e.preventDefault()
  if (tea !== ""){
    const newBlog ={
      text:text
    }
    postHandler(newBlog)
  }
  setTea("")
}

  return (
    <div className="bg-slate-500 ">
        <div className="text-center text-2xl font-bold space-y-5 ">
          <h3>MANilife</h3>
          <h2>BLOG !!!</h2>
        </div>

         <form onSubmit = {handleSubmit}>
        <div className="py-2  mx-[30%]">
          <label  className="font-bold" htmlFor="">PRODUCT NAME:</label>
       <input type="text" className="rounded border border-black w-[40%]  bg-slate-400"/>  
        </div>

        <div className="py-2  mx-[30%]">
          <label  className="font-bold" htmlFor="">IMAGE OF THE PRODUCT:</label>
          <input type="file" />
        </div>
         <button className="bg-cyan-300 text-white p-2  rounded-lg mt-5 mx-[50%]  ">
          Submit
         </button>
         <button  onClick={()=>updateBlog(item)} className="bg-blue-300 text-white ml-[50%] pr-5 mr-10 p-2 rounded-lg  mt-5">Save</button>
        <button onClick={()=>handleDelete(item.id)} className="bg-cyan-600 text-white p-2  pr-5 rounded-lg  mt-5">Delete</button>
        </form>

       <div className=" flex flex-wrap  mx-[5%] my-[5%] py-5  gap-3.5">
        <div>
          <a href="https://mani-life.com/blogs/news/brad-carter-partnership"><img  className="h-[300px] " src="./image/buns.webp" alt=""/> </a>
          <p className="text-2xl font-bold  ">Le Bab x ManiLife Veganuary Partnership</p>
        </div>
         <div>
          <a href="https://mani-life.com/blogs/news/meet-the-ludicrously-delicious-new-edition-to-the-manilife-range"> <img className="h-[300px] w-[80%]" src="./image/Rich cocoa.jpeg" alt="" /> </a>
          <p className="text-2xl font-bold">Meet the ludicrously delicious new edition to the ManiLife range</p>
         </div>
         <div>
          <a href="https://mani-life.com/blogs/news/gousto"> <img  className="h-[300px] " src="./image/burger.webp" alt="" /> </a>
          <p className="text-2xl font-bold ">The Wild Buns: Gousto x ManiLife Collaboration</p>
         </div>
         <div>
          <a href="https://mani-life.com/blogs/news/manikids-peanut-butter-themed-activity-packs"> <img className="h-[300px] ml-[35px] " src="./image/kids.webp"alt="" /> </a>
          <p className="text-2xl font-bold ml-[10%]">ManiKids Peanut Butter-themed Activity Packs</p>
         </div>
         <div>
          <a href="https://mani-life.com/blogs/news/how-to-win-a-years-worth-of-manilife-peanut-butter"> <img className="h-[300px] ml-[30%]" src="./image/crunchy.webp" alt="" /> </a>
          <p className="text-2xl font-bold ml-[30%]">How to win a years worth of ManiLife peanut butter</p>
         </div>
         </div>
    </div>

  )
}

export default BlogForm