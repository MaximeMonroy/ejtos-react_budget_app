import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

	const setBudget = (newBudget) => {

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
					max="20000"
					step="10">
				</input>
			</span>
        </div>
    );
};

export default Budget;
