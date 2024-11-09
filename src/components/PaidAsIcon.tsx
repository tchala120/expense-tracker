import { Space } from 'antd-mobile'
import { BankcardOutline, ScanCodeOutline } from 'antd-mobile-icons'

import type { PaymentMethod } from '@/services/api'

interface PaidAsIconProps {
	method: PaymentMethod
}

export const PaidAsIcon = ({ method }: PaidAsIconProps) => {
	switch (method) {
		case 'credit-card':
			return (
				<Space align="center">
					<BankcardOutline />

					<span>Credit Card</span>
				</Space>
			)

		default:
		case 'transfer':
			return (
				<Space align="center">
					<ScanCodeOutline />

					<span>Transfer</span>
				</Space>
			)
	}
}
