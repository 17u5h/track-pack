import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";
import {allTracksSelector} from "../../store/selectors/allTracksSelector";
import {putAllTracks} from "../../store/actions/creators/allTracks";

export function CentralBlockSearch() {
	const themeSwitcher = useSelector(themeSelector)
	const allTracks = useSelector(allTracksSelector)
	const [searchValue, setSearchValue] = useState('')
	const dispatch = useDispatch()

	function search(event){
		if (event.key === 'Enter') {
			const prettyValue = event.target.value.toLowerCase().trim()
			setSearchValue(prettyValue)
			const prettySortedTracks = allTracks.filter(el => el.name.toLowerCase().includes(prettyValue))
			dispatch(putAllTracks(prettySortedTracks))
		}
	}


	return (
		<S.CentralBlockSearch isDarkTheme={themeSwitcher}>
			<svg>
				<use href={'../img/icon/sprite.svg#icon-search'}/>
			</svg>
			<input type="text"
						 placeholder='Поиск'
						 name='search'
						 value={searchValue}
						 onChange={(event) => setSearchValue(event.target.value)}
						 onKeyDown={(event) => search(event)}
			/>
		</S.CentralBlockSearch>
	)
}