import Image from 'next/image'
import { memo } from 'react'
import { User as UserType } from 'types/user'
import S from './styles.module.scss'

interface UserProps extends UserType {
	selectedUser: number
	setSelectedUser: (id: number) => void
}

const User = ({
	id,
	name,
	email,
	image,
	phone,
	address,
	selectedUser,
	setSelectedUser
}: UserProps) => {
	console.log(image)

	return (
		<li
			className={selectedUser === id ? `${S.card} ${S.isActive}` : `${S.card}`}
			onClick={() => setSelectedUser(id)}
		>
			<section>
				<Image
					src={image}
					alt={`${name} avatar`}
					width={70}
					height={70}
					priority
				/>
				<div>
					<h2>{name}</h2>
					<span>{email}</span>
					<span>{phone}</span>
				</div>
			</section>
			<aside>
				<div>
					<span>Country:</span>
					{address.country}
				</div>
				<div>
					<span>State:</span>
					{address.state}
				</div>
				<div>
					<span>Street:</span>
					{address.street}
				</div>
			</aside>
		</li>
	)
}

export default memo(User)
