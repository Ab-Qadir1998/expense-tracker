import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h5 className="balance">Your Balance</h5>
            <h1 className="balance">${total}</h1>
        </>
    )
}
