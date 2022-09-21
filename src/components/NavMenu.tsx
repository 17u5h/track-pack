import React from "react";
import * as S from "../styles";

const hrefs = [{
	id: 1,
	href: 'https://',
}, {
	id: 2,
	href: 'https://'
}, {
	id: 3,
	href: 'https://'
}]
const content: string[] = ['Главное', 'Мой плейлист', 'Войти']

export function NavMenu() {
	return (
		<S.NavMenu>
			<S.NavMenuList>
				{hrefs.map((link, i) => (
					<li key={link.id}>
						<a href={link.href}>{content[i]}</a>
					</li>
				))}
			</S.NavMenuList>
		</S.NavMenu>
	)
}


