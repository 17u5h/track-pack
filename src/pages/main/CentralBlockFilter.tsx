import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {
	sortedTracksByAuthorSelector,
	sortedTracksByDateSelector,
	sortedTracksByGenreSelector
} from "../../store/selectors/sortedTracksSelector";
import {PopUp} from "./PopUpFiltered";
import * as S from "../../styles";

export function CentralBlockFilter() {
	const [whoActive, setActive] = useState('none')

	const sortedTracksByDate = useSelector(sortedTracksByDateSelector)
	const sortedTracksByAuthor = useSelector(sortedTracksByAuthorSelector)
	const sortedTracksByGenre = useSelector(sortedTracksByGenreSelector)

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
				{whoActive === 'author' && <PopUp setActive={setActive} tracks={sortedTracksByDate}/>}
			</S.FilterContainer>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('year')} isDarkTheme={themeSwitcher}>году выпуска</S.FilterButton>
				{whoActive === 'year' && <PopUp setActive={setActive} tracks={sortedTracksByAuthor}/>}
			</S.FilterContainer>

			<S.FilterContainer>
				<S.FilterButton onClick={() => togglePopUp('genre')} isDarkTheme={themeSwitcher}>жанру</S.FilterButton>
				{whoActive === 'genre' && <PopUp setActive={setActive} tracks={sortedTracksByGenre}/>}
			</S.FilterContainer>

		</S.CentralBlockFilter>
	)
}