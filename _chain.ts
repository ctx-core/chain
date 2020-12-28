import { isArray } from '@ctx-core/object'
export function _chain<O extends unknown = unknown>(ctx, ...keys:_chain_key_type[]) {
	let head = ctx
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i]
		if (typeof key === 'function') {
			head =
				head == null
				? head
				: (key as _chain_key_fn_type).call(head, head)
			continue
		}
		if (typeof key === 'string') {
			walk_key(key)
		}
		if (isArray(key)) {
			const args = key.slice(1)
			key = key[0]
			const key_a1 = key.split('.')
			const n1_key = key_a1.slice(0, key_a1.length - 1).join('.')
			if (n1_key) walk_key(n1_key)
			key = key_a1[key_a1.length - 1]
			head = head[key] && head[key](...args)
		}
	}
	return head as O
	function walk_key(key: string) {
		const key_a1: string[] = key.split('.')
		for (const key of key_a1) {
			head =
				head == null
				? head
				: head[key]
		}
	}
}
export type _chain_key_fn_type = (this:any, head:any)=>string
export type _chain_key_type = string|_chain_key_fn_type
