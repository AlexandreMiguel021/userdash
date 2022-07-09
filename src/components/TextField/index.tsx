import { ChangeEvent, InputHTMLAttributes } from 'react'
import Input from 'components/Input'
import { TextField as StylesTextField } from './styles'
import Label from 'components/Label'
import { useFormContext } from 'react-hook-form'
import { mask } from 'utils/mask'
import SpanError from 'components/SpanError'

type TextFieldProps = {
	label: string
	name: string
	mask?: string | string[]
} & InputHTMLAttributes<HTMLInputElement>

export default function TextField(props: TextFieldProps) {
	const { mask: maskPattern, name, label, ...rest } = props

	const {
		register,
		setValue,
		formState: { errors }
	} = useFormContext()

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setValue(name, mask(e.target.value, maskPattern), {
			shouldValidate: true
		})
	}

	return (
		<StylesTextField>
			<Label htmlFor={name}>{label}</Label>
			<Input {...register(name)} id={name} onChange={handleChange} {...rest} />
			{errors && <SpanError>{errors[name]?.message}</SpanError>}
		</StylesTextField>
	)
}
