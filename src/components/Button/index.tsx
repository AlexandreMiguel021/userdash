import { ButtonHTMLAttributes } from 'react'
import S from './styles.module.scss'

type ButtonProps = {
	children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => {
	const { children } = props
	return (
		<button {...props} className={S.button}>
			{children}
		</button>
	)
}

export default Button
