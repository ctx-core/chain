export declare function chain_<O extends unknown = unknown>(ctx: chain__ctx_I, ...keys: chain_key__T[]): O;
export interface chain__ctx_I extends Record<string, any> {
}
export declare type chain_key__fn_T = (this: any, head: any) => string;
export declare type chain_key__T = string | string[] | number | chain_key__fn_T;
export { chain_ as _chain, };
