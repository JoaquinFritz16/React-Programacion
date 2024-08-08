import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [products, setProducts] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [text, setText] = useState("");

	const search = (event) => {
		setText(event.target.value);
		if (setText === "") {
			setProducts(filtered);
		} else {
			setProducts(
				filtered.filter((product) => product.title.startsWith(text))
			);
			console.log(text);
		}
	};

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((json) => {
				setProducts(json);
				setFiltered(json);
			});
	}, []);

	return (
		<>
			<h1>Comenzando React</h1>
			<input onChange={search} value={text}></input>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;
