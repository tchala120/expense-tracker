import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const src = path.resolve(__dirname, 'src')
const directories = fs
	.readdirSync(src, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)

const importOrder = directories.map((directory) => [`^@/${directory}/(.*)$`, '']).flat()

console.log('Import order', importOrder)

const prettierConfig = {
	endOfLine: 'auto',
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	printWidth: 120,
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: ['<BUILTIN_MODULES', '', '<THIRD_PARTY_MODULES>', '', ...importOrder, '^[./]'],
}

export default prettierConfig
