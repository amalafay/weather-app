import { Search as SearchIcon } from 'lucide-react';
import React from 'react';
import './Search.css';

function Search({ handleSubmit, value, setValue }) {
	return (
		<form onSubmit={handleSubmit} className="search">
			<SearchIcon className="search_icon" />
			<input
				className="search_input"
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Buscar ciudad...clic aquí"
			/>
		</form>
	);
}

export default Search;
