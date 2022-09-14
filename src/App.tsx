import React, {useState} from 'react';
import './App.scss';
import {Main} from "./components/Main";
import {Bar} from "./components/Bar";
import {LoadingPage} from "./components/LoadingPage";

function App() {
	const [loaded, setLoaded] = useState(true)


	setTimeout(() => {
		setLoaded(false)
	}, 2000)

	return (
		<div className={'wrapper'}>

			{loaded ? <LoadingPage/> :
				<div className={'container'}>
					<Main/>
					<Bar/>
					<footer className={'footer'}></footer>
				</div>}
		</div>


	);
}


export default App;
