import React from 'react'
import {SideBarItem} from "./SideBarItem";
import * as S from "../styles";

type props = {
	imgSrc: string[]
	sideBarLink: string
}

export function SideBarBlock(props: props) {
	return (
		<S.SideBarBlock>
			<S.SideBarList>
				{props.imgSrc.map((el, i) => (
					<SideBarItem
						key={i}
						sideBarLink={props.sideBarLink}
						imgSrc={props.imgSrc[i]}
					/>
				))}
			</S.SideBarList>
		</S.SideBarBlock>
	)
}