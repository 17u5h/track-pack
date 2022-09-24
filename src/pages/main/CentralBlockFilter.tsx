import React, {useState} from 'react'
import {PopUpAuthors, PopUpGenre, PopUpYears} from "./PopUpFiltered";
import * as S from "../../styles";


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

	return (
		<S.CentralBlockFilter>
			<S.FilterTitle>Искать по:</S.FilterTitle>

			<S.FilterButton onClick={() => togglePopUp('author')}>исполнителю</S.FilterButton>
			{whoActive === 'author' && <PopUpAuthors>{filteredAuthors}</PopUpAuthors>}

			<S.FilterButton onClick={() => togglePopUp('year')}>году выпуска</S.FilterButton>
			{whoActive === 'year' && <PopUpYears>{filteredByYears}</PopUpYears>}

			<S.FilterButton onClick={() => togglePopUp('genre')}>жанру</S.FilterButton>
			{whoActive === 'genre' && <PopUpGenre>{filteredByGenre}</PopUpGenre>}

		</S.CentralBlockFilter>
	)
}