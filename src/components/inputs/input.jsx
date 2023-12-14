import { useState } from 'react';
import './style.scss';

export const Input = ({ inputValue, onChange, index }) => {
	const [inputsValue, setInputsValue] = useState(inputValue[index] || {});
	const { name, price, qty } = inputsValue || {};

	const handleChange = (value, type) => {
		const newValue = { ...inputsValue };
		newValue[type] = value;
		setInputsValue(newValue);
		onChange(newValue, index);
	};

	return (
		<div className='input-wrapper'>
			<label htmlFor=''>
				<input
					value={name || ''}
					onChange={(e) => handleChange(e.target.value, 'name')}
					type='text'
					placeholder='Ingredient name'
				/>
			</label>
			<label htmlFor=''>
				<span>Price for 1kg</span>
				<input
					value={price || ''}
					onChange={(e) => handleChange(e.target.value, 'price')}
					type='number'
					placeholder='Price'
				/>
			</label>
			<label htmlFor=''>
				<span>Weight in grams</span>
				<input
					value={qty || ''}
					onChange={(e) => handleChange(e.target.value, 'qty')}
					type='number'
					placeholder='Weight in grams'
				/>
			</label>
		</div>
	);
};
