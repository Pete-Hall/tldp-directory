import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function Results() {
    
    const searchResults = useSelector((store) => store.searchReducer);
    const loggedInUser = useSelector((store) => store.loginReducer);

    return (
        <div>
            {
                searchResults.length > 0 && loggedInUser ?
                <>
                    {searchResults.map((result) => (
                        <div key={result.id}>
                            <p>NAME: {result.name}</p>
                            <p>PHONE NUMBER: {result.phone}</p>
                            <p>JOB ROLE: {result.job}</p>
                            <p>WORK LOCATION: {result.location}</p>
                            {/* If self or if manager or if hr, show salary (comparing searchReducer to loginReducer) */}
                            {
                                loggedInUser.id === result.id || loggedInUser.id === result.manager || loggedInUser.hr === true ?
                                    <p>SALARY: {result.salary}</p>
                                    :
                                    <></>
                            }
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