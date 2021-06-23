import React, {useState, useEffect, useContext} from 'react'
import Tpostatus from './Tpostatus';
import Statusview from './Statusview';
import PostList from './PostList'
import ResourceList from './ResourceList'
import ResourceListstud from './ResourceListstud'
import Resourcescreate from './Resoucescreate'
import {UserContext} from "../App";
const Resources = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({});
    const { state, dispatch } = useContext(UserContext);

    const userHomePage = async () => {
        try {
            const res = await fetch('https://msit-conn.herokuapp.com/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            dispatch({ type: 'USER', payload: true });
            setUserName(data.name);
            setShow(true);
            setUserData(data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h2>Resources</h2>
                    
                </div>
            </div>
            <div>
            
                    
                <div className="container emp-profile">

                    <h1>TPO</h1>
                    <Resourcescreate />
                    <br/>
                    {/* <h1>Posts</h1> */}
                    {/* <Statusview /> */}
                    <ResourceList />
                    
                 

                </div>
        
           

                
                
                
            </div>

          

 


            
            
        </>
    )
}

export default Resources
