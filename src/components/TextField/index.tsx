import { InputHTMLAttributes } from 'react'
import S from './styles.module.scss'

type TextFieldProps = {
	label: string
	htmlFor: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, htmlFor, ...props }: TextFieldProps) => {
	return (
		<div className={S.wrapper}>
			<label htmlFor={htmlFor}>{label}</label>
			<input id={htmlFor} {...props} />
		</div>
	)
}

export default TextField
