import {
	Children,
	createElement,
	FormHTMLAttributes,
	ReactElement
} from 'react'
import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	useForm,
	UseFormProps
} from 'react-hook-form'
import { Form as FormStyle } from './styles'

interface FormProps<T extends FieldValues>
	extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
	form: UseFormProps<T>
	children: ReactElement | ReactElement[]
	onSubmit: SubmitHandler<T>
}

export default function Form<T extends FieldValues>({
	children,
	onSubmit,
	form,
	...rest
}: FormProps<T>): JSX.Element {
	const methods = useForm<T>(form)

	return (
		<FormProvider {...methods}>
			<FormStyle onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
				{Children.map(children, (child) => {
					return child.props.name
						? createElement<T>(child.type, {
								...{
									key: child.props.name,
									...methods.register,
									...child.props
								}
						  })
						: child
				})}
			</FormStyle>
		</FormProvider>
	)
}
