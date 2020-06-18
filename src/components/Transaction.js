import React, { useContext } from 'react'
import GlobalState, { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        <div>{transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span></div>
        <div><button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">X</button></div>
        </li>
    )
}
