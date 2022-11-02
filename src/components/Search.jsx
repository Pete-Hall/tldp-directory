import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function Search() {
    const store = useSelector((store) => store);
    const [hook, setHook] = useState('Hello');

    return (
        <div>
            <h2>{hook}</h2>
        </div>
    )
}

export default Search