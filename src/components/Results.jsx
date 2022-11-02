import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function Results() {
    const searchResults = useSelector((store) => store.searchReducer); // update to search result reducer

    // map through reducer (in case there are more than 1 people returned)
    return (
        <div>
            {
                searchResults.length > 0 ?
                <>
                    <p>NAME:</p>
                    <p>{searchResults[0].name}</p>
                    <p>Phone Number:</p>
                    <p>{searchResults[0].phone}</p>
                    <p>Job Role:</p>
                    <p>{searchResults[0].job}</p>
                    <p>Work Location:</p>
                    <p>{searchResults[0].location}</p>
                    <p>Salary:</p>
                    <p>{searchResults[0].salary}</p>
                </>
                :
                <>
                    <p>No results.</p>
                </>
            }
        </div>
    )
}

export default Results