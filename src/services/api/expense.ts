import _ from 'lodash'

import { expense } from '@/services/storage'

export type PaymentMethod = 'transfer' | 'credit-card'

export interface Expense {
	id: string
	name: string
	amount: number
	category: string
	paymentMethod: PaymentMethod
	paidAt: string
	note?: string
}

export interface ExpenseResponse {
	totalExpense: number
	expenseByMethod: Record<PaymentMethod, number>
	data: Record<string, Expense[]>
}

export const listExpenses = (): ExpenseResponse => {
	const result = expense.get()

	const totalExpense = result.reduce((acc, curr) => acc + curr.amount, 0)

	const expenseByMethod: ExpenseResponse['expenseByMethod'] = {
		transfer: 0,
		'credit-card': 0,
	}

	result.forEach((item) => {
		expenseByMethod[item.paymentMethod] += item.amount
	})

	const expenseGroupByDate = _.fromPairs(
		_(result)
			.groupBy('paidAt')
			.toPairs()
			.orderBy((item) => item[0], 'desc')
			.value(),
	)

	return {
		totalExpense: totalExpense || 0,
		expenseByMethod,
		data: expenseGroupByDate,
	}
}
