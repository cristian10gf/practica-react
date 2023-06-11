import {useGlobalState} from '../../context/GlobalState'

function TransactionItem({transaction}){
    const {deleteTransaction} = useGlobalState();
    return(
        <li className='bg-zinc-600 text-white rounded-lg px-3 py-1 mb-2 w-full flex items-center justify-between'>
            <p className='text-sm'>{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>X</button>
            </div>
        </li>
    )
};

export default TransactionItem;