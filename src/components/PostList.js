import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { getPosts } from "./api"
import {UserContext} from "../App";

const r =  require("relative-date-reverse")

const PostList = () => {
  const { state, dispatch } = useContext(UserContext);
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const Posts = await getPosts()
      setItems(Posts)
    }
    fetchPost()
  }, [])

  const DeletePost = async (id) =>{
    fetch(`https://msit-conn.herokuapp.com/deletepost/${id}`,{

      method: 'delete',
      
    })
    dispatch({ type: 'USER', payload: true });
    
  }

  return (
    <div className="">
      <div className="mt-3">
        <h3>Post</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              {/* <th>Post</th>
              <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {
              items.map(Post => (
                <tr key={Post._id}>
                  <td>
                    {Post.post}
                  </td>
                  <td>PostedOn: {Post.date}</td>
                  <td>
                    <button onClick={()=>DeletePost(Post._id)}>Delete</button>
                   
                  </td>
                  <td>
                   
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList