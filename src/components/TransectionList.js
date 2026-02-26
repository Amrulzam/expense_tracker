import React, { useContext, useRef, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const History = () =>{

    const {transactions}= useContext(GlobalContext);
    

    return (
        <div className='transactions-wrapper'>
            <h3> History </h3>
            <ul  className="list" >
                {transactions.map(transaction=> (
                    <Transaction key={transactions.id} transaction={transaction} />
                ))}

            </ul>
        </div>
    );
}
