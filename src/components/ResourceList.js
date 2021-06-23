import React, { useState, useEffect, useContext } from "react";
import {UserContext} from "../App";

import { getResources } from "./api"

const ResourceList = () => {
  const { state, dispatch } = useContext(UserContext);
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchResources = async () => {
      const Resources = await getResources()
      setItems(Resources)
    }
    fetchResources()
  }, [])

  const DeletePost = async (id) =>{
    fetch(`https://msit-conn.herokuapp.com/deleteresource/${id}`,{

      method: 'delete',
    })
    dispatch({ type: 'USER', payload: true });
    
  }

  return (
    <div>
      <div className="mt-3">
        <h3>Resources</h3>
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
                    <a href={Post.resource}>{Post.resource}</a>
                  </td>
              
                  <td>
                    <button onClick={()=>DeletePost(Post._id)}>Delete</button>
                   
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

export default ResourceList