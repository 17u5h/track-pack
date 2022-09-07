import React from 'react'
import {CenterblockSearch} from "./CenterblockSearch";
import {CenterblockFilter} from "./CenterblockFilter";
import {PlaylistTitle} from "./PlaylistTitle";
import {Playlist} from "./Playlist";

type centerBlockProps = {
	divClassName: string
}

export function CenterBlock(props: centerBlockProps) {
	return (
		<div className={props.divClassName}>
			<CenterblockSearch divClassName={'centerblock__search search'} inputClassName={'search__text'}/>
			<h2 className={'centerblock__h2'}>Треки</h2>
			<CenterblockFilter divClassName={'centerblock__filter filter'}
												 titleClassName={'filter__title'}
												 authorClassName={'filter__button button-author _btn-text'}
												 yearClassName={'filter__button button-year _btn-text'}
												 genreClassName={'filter__button button-genre _btn-text'}
			/>
			<div className={'centerblock__content'}>
				<PlaylistTitle divClassName={'content__title playlist-title'}
											 titleCol01ClassName={'playlist-title__col col01'}
											 titleCol02ClassName={'playlist-title__col col02'}
											 titleCol03ClassName={'playlist-title__col col03'}
											 titleCol04ClassName={'playlist-title__col col04'}
				/>
				<Playlist divClassName={'content__playlist playlist'}/>
			</div>

		</div>
	)

}