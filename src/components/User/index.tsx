import Image from 'next/image'
import S from './styles.module.scss'
import { memo, useContext } from 'react'
import { User as UserProps } from 'types/user'
import { UserContext } from 'contexts/UserContext'

const User = ({ id, name, email, image, phone, address }: UserProps) => {
	const { selectedUser, setSelectedUser } = useContext(UserContext)

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
					<span>País:</span>
					{address.country}
				</div>
				<div>
					<span>Estado:</span>
					{address.state}
				</div>
				<div>
					<span>Endereço:</span>
					{address.street}
				</div>
			</aside>
		</li>
	)
}

export default memo(User)
