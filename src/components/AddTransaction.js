import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction =() => {

    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');

    const {addTransaction}= useContext(GlobalContext);
    const onSubmit= e => {
        e.preventDefault();
        if(text.trim() === '' || amount.trim() === '') {
            alert("Please enter text and amount");
            return;
        }

        const newTransaction={
            id : Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form  onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>

        </div>
    );
}
