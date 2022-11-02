import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function Results() {
    const searchResults = useSelector((store) => store.searchReducer); // update to search result reducer

    // map through reducer (in case there are more than 1 people returned)
    return (
        <div>
            <p>NAME:</p>
            <p>{JSON.stringify(searchResults)}</p>
            <p>Phone Number:</p>
            <p>store.phone</p>
            <p>Job Role:</p>
            <p>TLDP Software Engineer</p>
            <p>Work Location:</p>
            <p>St. Paul, MN</p>
            <p>Salary:</p>
            <p>$1,000,000</p>
        </div>
    )
}

export default Results