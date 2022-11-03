import axios from 'axios';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginButton = async () => {
        try {
            // console.log(username);
            // console.log(password);

            // async function to get directory (user) results from database
            const userResults = await axios.get(`/api/login`);

            // match to see if the inputted username/password matches the database
            for(let i = 0; i<userResults.data.length; i++) {
                if(userResults.data[i].username === username && userResults.data[i].password === password) {
                    console.log('Match!:', username, userResults.data[i].username, password, userResults.data[i].password);
                    console.log(userResults.data[i]);

                    // send dispatch of userResults.data[i]
                    dispatch({type: 'STORE_LOGIN', payload: userResults.data[i]});
                }
            }
            navigate('/search');

            // // dispatch (send) response to reducer
            // dispatch({type: 'SHOW_SEARCH_RESULTS', payload: searchResults.data});
        } catch (err) {
            console.log('Error getting search results from DB:', err);
            alert('Error getting search results');
        }
    }

    return (
        <div>
            <input type="text" placeholder='Username' onChange={handleUsername}/>
            <br/>
            <input type="text" placeholder='Password' onChange={handlePassword}/>
            <br/>
            <button onClick={handleLoginButton}>LOGIN</button>
        </div>
    )
}

export default Login