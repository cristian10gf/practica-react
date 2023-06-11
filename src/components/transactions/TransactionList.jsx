import {useGlobalState} from '../../context/GlobalState'
import TransactionItem from './TransactionItem'

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <>
      <h3 className='text-slate-300 w-full text-xl font-bold'>History</h3>
      <ul>
        {transactions.map((transaction) => (<TransactionItem transaction={transaction} key={transaction.id} />))}
      </ul>
    </>
  );
}

export default TransactionList;