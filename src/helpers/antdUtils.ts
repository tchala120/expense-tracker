import { FormItemProps } from 'antd-mobile'

export const ruleRequired: NonNullable<FormItemProps['rules']>[number] = {
	required: true,
	message: 'Required',
}
