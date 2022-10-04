import React, {useContext, useState} from 'react'
import {PopUp} from "./PopUpFiltered";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";


const filteredAuthors = ['30 seconds to Mars', 'Arctic Monkeys', 'Blink 182', 'Dire Straits', 'Foo fighters', 'Green Day', "Guns 'n Roses", 'Metallica', 'The Offspring']
const filteredByYears = ['Dire Straits', "Guns 'n Roses", 'Metallica', 'The Offspring', 'Foo fighters', 'Blink 182', '30 seconds to Mars', 'Green Day', 'Arctic Monkeys']
const filteredByGenre = ["Guns 'n Roses", 'Metallica', 'The Offspring', 'Foo fighters', 'Blink 182', '30 seconds to Mars', 'Green Day', 'Arctic Monkeys', 'Dire Straits']

//здесь будет прилетать массив объектов с сервера, который потом буду фильтровать по определенным полям и делать Array.from

export function CentralBlockFilter() {
	const [whoActive, setActive] = useState('none')

	function togglePopUp(name: string) {
		if (whoActive === 'none') {
			setActive(name)
			return
		}
		setActive(prevName => prevName === name ? 'none' : name)
	}

	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.CentralBlockFilter>
			<S.FilterTitle dark={themeSwitcher}>Искать по:</S.FilterTitle>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('author') } dark={themeSwitcher}>исполнителю</S.FilterButton>
				{whoActive === 'author' && <PopUp >{filteredAuthors}</PopUp>}
			</S.FilterContainer>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('year')} dark={themeSwitcher}>году выпуска</S.FilterButton>
				{whoActive === 'year' && <PopUp >{filteredByYears}</PopUp>}
			</S.FilterContainer>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('genre')} dark={themeSwitcher}>жанру</S.FilterButton>
				{whoActive === 'genre' && <PopUp >{filteredByGenre}</PopUp>}
			</S.FilterContainer>

		</S.CentralBlockFilter>
	)
}