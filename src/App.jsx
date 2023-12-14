import { useEffect, useState } from 'react';
import './App.scss';
import { Input } from './components/inputs/input';

function App() {
	const [inputValue, setInputValue] = useState([
		{ name: '', price: '', qty: '' },
	]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		console.log(inputValue);
	}, [inputValue]);

	const [rows, setRows] = useState([
		<Input
			key={0}
			index={0}
			inputValue={inputValue}
			onChange={(value, index) => handleChangeInput(value, index)}
		/>,
	]);

	const handleAddRow = () => {
		setInputValue([...inputValue, { name: '', price: '', qty: '' }]);
		setRows([
			...rows,
			<Input
				key={rows.length}
				index={rows.length}
				inputValue={inputValue}
				onChange={(value, index) => handleChangeInput(value, index)}
			/>,
		]);
	};

	const handleCalculate = () => {
		const total = inputValue.reduce((acc, item) => {
			const price = item.price / 1000;
			const cost = price * item.qty;
			return acc + cost;
		}, 0);
		setTotal(total);
	};

	const handleChangeInput = (value, index) => {
		const newInputValue = [...inputValue];
		newInputValue[index] = value;
		setInputValue(newInputValue);
	};

	return (
		<>
			<h1>Cost price calculator</h1>
			<h2>Your cost price: {total}</h2>
			<div className='calculator'>
				<div className='calculator__inputs'>{rows}</div>
				<div className='calculator__buttons-wrapper'>
					<button
						onClick={() => handleAddRow()}
						className='calculator__add-input-btn'
					>
						Add row
					</button>
					<button
						onClick={() => handleCalculate()}
						className='calculator__add-input-btn'
					>
						Calculate
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
