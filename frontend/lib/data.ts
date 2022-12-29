import { IconType } from 'react-icons'
import { HiHome, HiPaperAirplane, HiUserCircle, HiViewBoards } from 'react-icons/hi'

export type Item = {
	name: string
	slug: string
	icon?: IconType
}

export const links: Item[] = [
	{
		name: 'Home',
		slug: '',
		icon: HiHome
	},
	{
		name: 'Campaigns',
		slug: 'campaigns',
		icon: HiViewBoards
	},
	{
		name: 'Create',
		slug: 'create',
		icon: HiPaperAirplane
	},
	{
		name: 'Profile',
		slug: 'profile',
		icon: HiUserCircle
	},
	{
		name: 'Test',
		slug: 'test'
	}
]
