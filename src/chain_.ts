import { isArray } from '@ctx-core/object'
export function chain_<O extends unknown = unknown>(ctx:chain__ctx_I, ...keys:chain_key__T[]) {
	let head = ctx
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i]
		if (typeof key === 'function') {
			process_key((key as chain_key__fn_T).call(head, head))
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
			const key_ = key.split('.')
			const n1_key = key_.slice(0, key_.length - 1).join('.')
			if (n1_key) walk_key(n1_key)
			key = key_[key_.length - 1]
			head = head[key] && head[key](...args)
		} else {
			head = head[key as number]
		}
	}
	function walk_key(key:string) {
		const key_:string[] = key.split('.')
		for (const key of key_) {
			head =
				head == null
				? head
				: head[key]
		}
	}
}
export interface chain__ctx_I extends Record<string, any> {
}
export type chain_key__fn_T = (this:any, head:any)=>string
export type chain_key__T = string|string[]|number|chain_key__fn_T
export {
	chain_ as _chain,
}
