import store from 'store2'

import { Expense } from './api'

type StoreItemKey = 'expense'

export const storeKey: Record<StoreItemKey, string> = {
	expense: 'expense',
}

export const expense = {
	get: () => {
		const result = store.get(storeKey.expense) as string | null

		if (result == null) {
			return []
		}

		return JSON.parse(result) as Expense[]
	},
	set: (value: Expense[]) => {
		store.set(storeKey.expense, value)
	},
}

export const clear = () => {
	store.clearAll()
}
