import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Results from './Results';

function Search() {
    const store = useSelector((store) => store);
    const [name, setName] = useState('');

    const handleSearchBar = (e) => {
        setName(e.target.value);
    }

    const handleSearchButton = () => {
        console.log(name);
        // async function to get search results from database
        // dispatch (send) response to reducer
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