import { _chain, _chain_key_type } from './_chain'
export function _chain_fn<O extends unknown = unknown>(obj: object, or: O) {
	return (...keys: _chain_key_type[]) => (_chain(obj, ...keys) || or) as O
}
export {
	_chain_fn as __chain
}
