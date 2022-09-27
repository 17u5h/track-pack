import React from 'react'
import * as S from "../../styles";

type Props = {
	children: string[]

}

export function PopUp({children}: Props) {
	return (
		<S.PopUp >
			{children.map((song, i) => (
				<p key={i}>{song}</p>
			))}
		</S.PopUp>
	)
}
