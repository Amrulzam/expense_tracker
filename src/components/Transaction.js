import React,{ useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction =({transaction}) => {

    const {deleteTransaction}= useContext(GlobalContext);

    const sign = transaction.amount<0 ? "-":"+";
    const sideBarColor = sign=="-"? 'minus':'plus'

    return(
        <li className={sideBarColor}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)} </span>  <button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
