import {VictoryPie, VictoryLabel} from 'victory';
import { useGlobalState } from '../context/GlobalState';

function ExpenseChart(){
    const {transactions } = useGlobalState();
    let total = transactions.map(transaction => transaction.amount).reduce((acc, item) => (acc += Math.abs(item)), 0).toFixed(2);
    let expenses = transactions.filter(transaction => transaction.amount < 0).reduce((acc, item) => (acc += item.amount), 0) * -1;

    if(total === 0){
        total = 1;
    }
    if (expenses === 0){
        expenses = 0;
    }

    let totalExpensePorcentaje = Math.round((expenses/total) * 100);

    if (totalExpensePorcentaje === NaN){
        totalExpensePorcentaje = 0;
    }
    let totalIncomePorcentaje = 100 - totalExpensePorcentaje;
    
    console.log(totalExpensePorcentaje, totalIncomePorcentaje);
    

    return (
        <VictoryPie
            animate={{duration: 200}}
            colorScale={["#e74c3c", "#2ecc71"]}
            labels={({datum}) => `${datum.y}%`}
            data={[
                { x: "Expenses", y: totalExpensePorcentaje },
                { x: "Incomes", y: totalIncomePorcentaje }
            ]}
            labelComponent={<VictoryLabel angle={40} style={{fill: 'white',}} />}
        />
    )
};

export default ExpenseChart;