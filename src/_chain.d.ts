export declare function _chain<O extends unknown = unknown>(ctx: any, ...keys: _chain_key_type[]): O;
export declare type _chain_key_fn_type = (this: any, head: any) => string;
export declare type _chain_key_type = string | _chain_key_fn_type;
