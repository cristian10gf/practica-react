import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm(){
    const {addTransaction} = useGlobalState();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id:window.crypto.randomUUID(),
            description, 
            amount: +amount
        });
        setDescription('');
        setAmount(0);
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' type="text" onChange={(e)=> setDescription(e.target.value)} placeholder="Enter a Description" value={description} />
                <input  className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' type="number" step="0.01" onChange={(e) => setAmount(e.target.value)} placeholder="00.00" value={amount}/>
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Add Transaction</button>
            </form>

        </div>
    )
};

export default TransactionForm;