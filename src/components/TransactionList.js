import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import GlobalState, { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);


    return (
        <>
            <h3 className="transaction">History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </>
    )
}
