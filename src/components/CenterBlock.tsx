import React from 'react'
import {CenterblockSearch} from "./CenterblockSearch";
import {CenterblockFilter} from "./CenterblockFilter";
import {PlaylistTitle} from "./PlaylistTitle";
import {Playlist} from "./Playlist";

export function CenterBlock() {
	return (
		<div className={'main__centerblock centerblock'}>
			<CenterblockSearch />
			<h2 className={'centerblock__h2'}>Треки</h2>
			<CenterblockFilter />
			<div className={'centerblock__content'}>
				<PlaylistTitle />
				<Playlist />
			</div>
		</div>
	)
}