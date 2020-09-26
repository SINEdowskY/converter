import React, { useState } from 'react';
import { Select } from '../Select';
import { Input } from '../Input';
import { Button } from '../Button';



function Calculator(){
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('PLN');
    const [currencyTo, setCurrencyTo] = useState('USD');
    const [result, setResult] = useState(0);

    const handleSubmit = (event) => {
      event.preventDefault();
      fetch(`https://api.ratesapi.io/api/latest?base=${currencyFrom}`)
      .then(response => response.json())
      .then(data => {
        setResult(`${(amount * data.rates[currencyTo]).toFixed(2)} ${currencyTo}`);
      })};


    return(
        <form onSubmit={handleSubmit}>
      <div>
        <Input eventSet={setAmount}/>
      </div>
      <div>
        <span>From: </span>
        <Select value={currencyFrom} setCurrency={setCurrencyFrom}/>
      </div>
      <div>
        <span>To: </span>
        <Select value={currencyTo} setCurrency={setCurrencyTo}/>
      </div>
    <div>Result: {result}</div>
      <Button type="submit" label="Send"/>
    </form>
    );
}
export default Calculator;