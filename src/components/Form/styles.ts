import styled from 'styled-components'

export const FormStyle = styled.form`
	display: grid;
	max-width: 80rem;
	margin: auto;
	gap: 2rem;

	main {
		grid-template-columns: 1fr 1fr;
		display: grid;
		gap: 0 1rem;

		svg {
			color: rgba(241, 241, 241, 0.555);
			width: 4rem;
		}
	}
`
