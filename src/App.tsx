import React from 'react';
import {Main} from "./components/Main";
import {Bar} from "./components/Bar";
import * as S from "./styles"

function App() {
	return (
		<>
			<S.GlobalStyle/>
			<S.Wrapper>
				<S.Container>
					<Main/>
					<Bar/>
				</S.Container>
			</S.Wrapper>
		</>
	);
}

export default App;
