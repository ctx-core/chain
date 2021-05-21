import { isArray } from '@ctx-core/object'
export function _chain<O extends unknown = unknown>(ctx:_chain_Ctx, ...keys:_chain_key_type[]) {
	let head = ctx
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i]
		if (typeof key === 'function') {
			process_key((key as _chain_key_fn_type).call(head, head))
			continue
		}
		process_key(key)
	}
	return head as O
	function process_key(key:string|string[]|number) {
		if (typeof key === 'string') {
			walk_key(key)
		} else if (isArray(key)) {
			const in_key_a1 = key as string[]
			const args = in_key_a1.slice(1)
			key = in_key_a1[0]
			const key_a1 = key.split('.')
			const n1_key = key_a1.slice(0, key_a1.length - 1).join('.')
			if (n1_key) walk_key(n1_key)
			key = key_a1[key_a1.length - 1]
			head = head[key] && head[key](...args)
		} else {
			head = head[key as number]
		}
	}
	function walk_key(key:string) {
		const key_a1:string[] = key.split('.')
		for (const key of key_a1) {
			head =
				head == null
				? head
				: head[key]
		}
	}
}
export interface _chain_Ctx extends Record<string, any> {
}
export type _chain_key_fn_type = (this:any, head:any)=>string
export type _chain_key_type = string|string[]|number|_chain_key_fn_type
