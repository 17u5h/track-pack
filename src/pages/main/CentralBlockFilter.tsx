import React, {useContext, useState} from 'react'
import {PopUp} from "./PopUpFiltered";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";


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

	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.CentralBlockFilter>
			<S.FilterTitle isDarkTheme={themeSwitcher}>Искать по:</S.FilterTitle>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('author')} isDarkTheme={themeSwitcher}>исполнителю</S.FilterButton>
				{whoActive === 'author' && <PopUp>{filteredAuthors}</PopUp>}
			</S.FilterContainer>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('year')} isDarkTheme={themeSwitcher}>году выпуска</S.FilterButton>
				{whoActive === 'year' && <PopUp>{filteredByYears}</PopUp>}
			</S.FilterContainer>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('genre')} isDarkTheme={themeSwitcher}>жанру</S.FilterButton>
				{whoActive === 'genre' && <PopUp>{filteredByGenre}</PopUp>}
			</S.FilterContainer>

		</S.CentralBlockFilter>
	)
}