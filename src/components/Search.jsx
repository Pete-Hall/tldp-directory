import axios from 'axios';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Results from './Results';

function Search() {
    const store = useSelector((store) => store);
    const [name, setName] = useState('');

    const handleSearchBar = (e) => {
        setName(e.target.value);
    }

    const handleSearchButton = async () => {
        try {
            // console.log(name);
            // async function to get search results from database
            const searchResults = await axios.get('/api/search');
            console.log('search results:', searchResults.data);
            // dispatch (send) response to reducer
        } catch (err) {
            console.log('Error getting search results from DB:', err);
            alert('Error getting search results');
        }
    }

    return (
        <div>
            <input type="text" placeholder='Search for a name ...' onChange={handleSearchBar}/>
            <button onClick={handleSearchButton}>SEARCH</button>
            <Results />
        </div>
    )
}

export default Search