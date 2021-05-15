export declare function _chain<O extends unknown = unknown>(ctx: _chain_ctx_I, ...keys: _chain_key_type[]): O;
export interface _chain_ctx_I extends Record<string, any> {
}
export declare type _chain_key_fn_type = (this: any, head: any) => string;
export declare type _chain_key_type = string | string[] | number | _chain_key_fn_type;
