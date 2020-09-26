import React, { useEffect, useState } from 'react';

function Select({value, setCurrency}) {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        fetch(`https://api.ratesapi.io/api/latest?base=PLN`)
        .then(response => response.json())
        .then(data => {
        setCurrencies(Object.keys(data.rates))
            }
        )
    }, []);

    return (
        <select value={value} onChange={(event) => {setCurrency(event.target.value)}}>
            {currencies.map((elem) => <option key={`curr-${elem}`} value={elem}>{elem}</option>)}
        </select>
    );
}

export default Select;