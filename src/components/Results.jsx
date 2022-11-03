import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function Results() {
    
    const searchResults = useSelector((store) => store.searchReducer);

    return (
        <div>
            {
                searchResults.length > 0 ?
                <>
                    {searchResults.map((result) => (
                        <div key={result.id}>
                            <p>NAME: {result.name}</p>
                            <p>PHONE NUMBER: {result.phone}</p>
                            <p>JOB ROLE: {result.job}</p>
                            <p>WORK LOCATION: {result.location}</p>
                            <p>SALARY: {result.salary}</p>
                            <br/>
                        </div>
                    ))}
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