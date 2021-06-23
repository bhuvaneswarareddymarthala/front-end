export const getPosts = () => fetch("https://msit-conn.herokuapp.com/posts").then(res => res.json())
export const getResources = () => fetch("https://msit-conn.herokuapp.com/resources").then(res => res.json())

export const createPost = (Post) => fetch("https://msit-conn.herokuapp.com/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(Post)
})  

export const updatePost = (post, id) => fetch(`https://msit-conn.herokuapp.com//edit/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(post)
})  
 

export const getPost = (id) => fetch(`https://msit-conn.herokuapp.com//edit/${id}`).then(res => res.json())



