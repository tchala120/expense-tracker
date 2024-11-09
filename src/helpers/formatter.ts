export const DATE_FORMAT = 'YYYY-MM-DD'
export const TIME_FORMAT = 'HH:mm'

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`

export const moneyFormat = (value: number) => {
	const formatter = new Intl.NumberFormat('th-TH', {
		style: 'currency',
		currency: 'THB',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	})

	return formatter.format(value)
}
