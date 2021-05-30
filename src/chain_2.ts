import { chain_, chain_key__T } from './chain_'
export function chain_2<O extends unknown = unknown>(obj: object, or: O) {
	return (...keys: chain_key__T[]) => (chain_(obj, ...keys) || or) as O
}
export {
	chain_2 as __chain
}
