import { chain_ } from '../chain_/index.js'
export function chain__(obj, or) {
	return (...keys)=>chain_(obj, ...keys) || or
}
export {
	chain__ as chain_2,
	chain__ as __chain,
}
