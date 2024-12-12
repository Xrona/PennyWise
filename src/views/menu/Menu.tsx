import Link from 'next/link'
import { FC } from 'react'
import { Table2, NotepadText } from 'lucide-react'

export const Menu: FC = () => {
	const routes = [
		{
			name: 'Dashboard',
			url: '/',
			icon: <Table2 size={16} />,
		},
		{
			name: 'About',
			url: '/about',
			icon: <NotepadText size={16} />,
		},
	]

	return (
		<nav className='block w-[300px] self-stretch rounded-l bg-zinc-900 text-white'>
			<div className='p-4'>
				<div className='mb-4'>Logo</div>
				<ul className='space-y-4'>
					{
						routes.map(route => (
							<li key={route.url}>
								<Link
									className='flex items-center gap-1'
									href={route.url}
								>
									{route.icon}
									<span>
										{route.name}
									</span>
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</nav>
	)
}
