import React from 'react'
import * as S from "../styles";

type props = {
	children: string[]
}

export function PopUpAuthors({children}: props) {
	return (
		<S.PopUp>
			{children.map((song, i) => (
				<p key={i}>{song}</p>
			))}
		</S.PopUp>
	)
}

export function PopUpYears({children}: props) {
	return <S.PopUpMoved240>{children.map((song, i) => (
		<p key={i}>{song}</p>
	))}</S.PopUpMoved240>
}

export function PopUpGenre({children}: props) {
	return <S.PopUpMoved390>{children.map((song, i) => (
		<p key={i}>{song}</p>
	))}</S.PopUpMoved390>
}
