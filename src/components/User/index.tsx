import { memo } from 'react'
import { User as UserProps } from 'types/user'

const User = ({ id, name, email, birthdate }: UserProps) => (
	<li>
		id: {id} | Nome: {name} | E-mail: {email} | Data de nascimneto: {birthdate}{' '}
		| Endereço{''}
	</li>
)

export default memo(User)
