

function BlogList({blog,deleteHandler,updateBlog, BlogItem}) {

  return (
    <div>
        {blog.map((item)=>(
          <BlogItem item={item} key={item.id} handleDelete={deleteHandler} updateBlog={updateBlog} handleUpdate={BlogItem}/>  
        ))}
    </div>
  )
}

export default BlogList