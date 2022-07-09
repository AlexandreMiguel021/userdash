import useSWR from 'swr'

import { instance } from 'services/api/config'

export function useApi(url: string | null) {
	const { data, error, mutate } = useSWR(url, async (url) => {
		const { data } = await instance.get(url)

		return data
	})

	return { data, error, mutate }
}
