import React from "react";


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
		<div className={'nav__menu menu'}>
			<ul className={'menu__list'}>
				{hrefs.map((link, i) => (
					<li key={link.id} className={'menu__item'}>
						<a href={link.href} className={'menu__link'}>{content[i]}</a>
					</li>
				))}
			</ul>
		</div>
	)
}


