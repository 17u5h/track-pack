import React, {useState} from 'react'
import {PopUpFiltered} from "./CenterBlockFilter/PopUpFiltered";
import {FilterButton} from "./CenterBlockFilter/FilterButton";

const filteredAuthors = ['30 seconds to Mars', 'Arctic Monkeys', 'Blink 182', 'Dire Straits', 'Foo fighters', 'Green Day', "Guns 'n Roses", 'Metallica', 'The Offspring']
const filteredByYears = ['Dire Straits', "Guns 'n Roses", 'Metallica', 'The Offspring', 'Foo fighters', 'Blink 182', '30 seconds to Mars', 'Green Day', 'Arctic Monkeys']
const filteredByGenre = ["Guns 'n Roses", 'Metallica', 'The Offspring', 'Foo fighters', 'Blink 182', '30 seconds to Mars', 'Green Day', 'Arctic Monkeys', 'Dire Straits']
//здесь будет прилетать объект с сервера, который потом буду фильтровать по определенным полям и делать Array.from

export function CenterblockFilter() {
	const [activeAuthors, setActiveAuthors] = useState(false)
	const togglePopUpFilterByAuthors = () => {
		setActiveAuthors(!activeAuthors)
		setActiveYears(false) //мне не очень нравится ручное удаление
		setActiveGenre(false)
	}

	const [activeYears, setActiveYears] = useState(false)
	const togglePopUpFilterByYears = () => {
		setActiveYears(!activeYears)
		setActiveAuthors(false)
		setActiveGenre(false)
	}

	const [activeGenre, setActiveGenre] = useState(false)
	const togglePopUpFilterByGenre = () => {
		setActiveGenre(!activeGenre)
		setActiveYears(false)
		setActiveAuthors(false)
	}
	return (
		<div className={'centerblock__filter filter'}>
			<div className={'filter__title'}>Искать по:</div>
			<FilterButton className={'filter__button button-author _btn-text'}
										onClick={togglePopUpFilterByAuthors}>исполнителю</FilterButton>

			{activeAuthors && <PopUpFiltered className={'filter__pop-up-filtered filter__pop-up-filtered_authors'}>
				{filteredAuthors}</PopUpFiltered>
			}
			<FilterButton className={'filter__button button-year _btn-text'}
										onClick={togglePopUpFilterByYears}>году выпуска</FilterButton>

			{activeYears && <PopUpFiltered
				className={['filter__pop-up-filtered', 'filter__pop-up-filtered_year'].join(' ')}>{filteredByYears}</PopUpFiltered>
			}
			<FilterButton className={'filter__button button-genre _btn-text'}
										onClick={togglePopUpFilterByGenre}>жанру</FilterButton>

			{activeGenre && <PopUpFiltered
				className={['filter__pop-up-filtered', 'filter__pop-up-filtered_genre'].join(' ')}>{filteredByGenre}</PopUpFiltered>
			}
		</div>
	)
}