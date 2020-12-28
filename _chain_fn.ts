import { _chain, _chain_key_type } from './_chain'
export function _chain_fn<O extends unknown = unknown>(ctx, or: O) {
	return (...keys: _chain_key_type[]) => (_chain(ctx, ...keys) || or) as O
}
export {
	_chain_fn as __chain
}
