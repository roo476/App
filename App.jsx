import React, { useReducer } from 'react';
import Counter from './Counter';

function reducer(state, action) {
  switch (action.type) {
    case 'deposit':
      return { balance: state.balance + 50 };
    case 'withdraw':
      return { balance: state.balance - 20 };
    default:
      throw new Error('Unknown action');
  }
}

function BankAccount() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  return (
    <div>
      <h2>💰 Account Balance: ${state.balance}</h2>

      <button
        onClick={() => dispatch({ type: 'deposit' })}
      >
        Deposit $50
      </button>

      <button
        onClick={() => dispatch({ type: 'withdraw' })}
       
      >
        Withdraw $20
      </button>
      <Counter/>
    </div>
  );
}

export default BankAccount;
