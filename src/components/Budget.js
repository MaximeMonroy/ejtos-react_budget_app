import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const MAX_BUDGET = 20000;
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

	const setBudget = (newBudget) => {
        if(newBudget > MAX_BUDGET) {
            alert("The budget cannot exceed "+ currency + " " + MAX_BUDGET);
            return;
        }
        if(newBudget < totalExpenses) {
            alert("The budget cannot be lower than the total expenses : "+ currency + " " + totalExpenses);
            return;
        }
        dispatch({
			type: 'SET_BUDGET',
			payload: newBudget,
		});
    };
	
    return (
        <div className='alert alert-secondary'>
			<span>Budget:
			</span>
			<span style={{ float: "right"}}>
				{currency}
				<input
					required='required'
					type='number'
					id='budget'
					value={budget}
					style={{ size: 10}}
					onChange={(event) => setBudget(event.target.value)}
					min={totalExpenses}
					max={MAX_BUDGET}
					step="10">
				</input>
			</span>
        </div>
    );
};

export default Budget;
