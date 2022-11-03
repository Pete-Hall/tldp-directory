import axios from 'axios';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Login() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const handleSearchBar = (e) => {
        setName(e.target.value);
    }

    const handleSearchButton = async () => {
        try {
            // console.log(name);
            // async function to get search results from database
            const searchResults = await axios.get(`/api/search/${name}`);
            console.log('search results:', searchResults.data);
            // dispatch (send) response to reducer
            dispatch({type: 'SHOW_SEARCH_RESULTS', payload: searchResults.data});
        } catch (err) {
            console.log('Error getting search results from DB:', err);
            alert('Error getting search results');
        }
    }

    return (
        <div>
            <input type="text" placeholder='Username' onChange={handleSearchBar}/>
            <br/>
            <input type="text" placeholder='Password' />
            <br/>
            <button onClick={handleSearchButton}>SEARCH</button>
        </div>
    )
}

export default Login