function* generatorByArray(array: string[]) {
	let index = 0
	while (true) {
		yield array[index]
		index = (index + 1) % array.length
	}
}

function getGroupsAndSeparators(pattern: string): {
	map: string[]
	regexArr: RegExp[]
	separators: string[]
} {
	const patterns = pattern.split(/([\s\-()])|(?=[\s\-()])/g)

	const separators: string[] = []
	const regexArr: RegExp[] = []
	const map: string[] = []

	patterns.forEach((pattern: string) => {
		pattern.split('').forEach((piece) => {
			let regex

			switch (piece) {
				case '9':
					regex = '\\d'
					regexArr.push(new RegExp(regex))
					map.push('v')
					break

				case '0':
					regex = '\\d'
					regexArr.push(new RegExp(regex))
					map.push('v')
					break

				default:
					separators.push(piece)
					map.push('s')
					break
			}
		})
	})

	return { map, regexArr, separators }
}

function sanitizeInputValue(input: string, regexArr: RegExp[]) {
	const valueArr = input.replace(/\s/g, '').split('')

	let sanitized = ''
	let index = 0

	valueArr.forEach((value) => {
		if (regexArr[index]?.test(value)) {
			index++
			sanitized += value
		}

		return ''
	})

	return sanitized
}

function getCurrentLength(value: string, map: string[]) {
	let separatorsLength = 0
	let valuesLength = 0

	map.forEach((mapKey) => {
		if (valuesLength < value.length) {
			mapKey === 's' && separatorsLength++
			mapKey === 'v' && valuesLength++
		}
	})

	return valuesLength + separatorsLength
}

function mergeSeparatorsAndValues(
	input: string,
	separators: string[],
	map: string[]
) {
	const separatorGenerator = generatorByArray(separators)
	const valueGenerator = generatorByArray(input.split(''))

	return map
		.slice(0, getCurrentLength(input, map))
		.map((value) =>
			value === 's'
				? separatorGenerator.next().value
				: valueGenerator.next().value
		)
		.join('')
}

function countHits(input: string, regexes: RegExp[]) {
	let hits = 0
	let errors = 0

	input.split('').every(function (piece, index) {
		regexes[index] && regexes[index].test(piece) ? hits++ : errors++
		if (errors > 0) return false
		else return true
	})

	return hits
}

function chooseBestMask(input: string, patterns: string[]) {
	const value = input.replace(/\D/gim, '')
	const reorderedPatterns = patterns.sort(
		(prev, next) => prev.length - next.length
	)
	const groups = reorderedPatterns.map((pattern) =>
		getGroupsAndSeparators(pattern)
	)
	let choosed = { hits: 0, group: groups[0] }

	groups.forEach((group) => {
		const currentGroupHits = countHits(value, group.regexArr)
		if (currentGroupHits > choosed.hits) {
			choosed = { hits: currentGroupHits, group }
		}
	})

	return choosed.group
}

export function mask(input: string, patterns?: string | string[]) {
	if (!input || input?.length === 0 || !patterns || patterns.length === 0)
		return input

	const { map, regexArr, separators } = chooseBestMask(
		input,
		Array.isArray(patterns) ? patterns : [patterns]
	)
	const value = sanitizeInputValue(input, regexArr)

	return mergeSeparatorsAndValues(value, separators, map)
}

export const unMask = (value: string | number) => {
	return value.toString().replace(/[^A-Za-z0-9]+/g, '')
}
