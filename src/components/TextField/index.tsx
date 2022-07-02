import { forwardRef, InputHTMLAttributes } from 'react'
import errors from 'utils/errors.json'
import Input from 'components/_ui/Input'
import { TextField as StylesTextField } from './styles'
/* eslint-disable @typescript-eslint/ban-ts-comment */

type TextFieldProps = {
	label: string
	field: string
	errorType?: string
	mask?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ field, label, errorType, mask, ...rest }, ref) => (
		<StylesTextField error={errorType!}>
			<label htmlFor={field}>{label}</label>
			<Input mask={mask!} inputRef={ref} id={field} {...rest} />
			{/* @ts-expect-error */}
			<span>{errorType && errors[field][errorType]}</span>
		</StylesTextField>
	)
)

export default TextField
TextField.displayName = 'Text Field'
