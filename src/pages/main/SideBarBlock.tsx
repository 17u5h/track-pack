import React from 'react'
import {SideBarItem} from "./SideBarItem";
import * as S from "../../styles";
import {Link} from "react-router-dom";


export function SideBarBlock() {

	return (
		<S.SideBarBlock>
			<S.SideBarList>
				<Link to='/daily-playlist'><SideBarItem imgSrc='../img/playlist01.png'/></Link>
				<Link to='/100-dance-hits'><SideBarItem imgSrc='../img/playlist02.png'/></Link>
				<Link to='/indy-charge'><SideBarItem imgSrc='../img/playlist03.png'/></Link>
			</S.SideBarList>
		</S.SideBarBlock>
	)
}