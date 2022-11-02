import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function Results() {
    const store = useSelector((store) => store);

    
    return (
        <div>
            <p>NAME:</p>
            <p>Pete</p>
            <p>Phone Number:</p>
            <p>123-456-7890</p>
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