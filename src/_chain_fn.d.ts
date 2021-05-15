import { _chain_key_type } from './_chain';
export declare function _chain_fn<O extends unknown = unknown>(obj: object, or: O): (...keys: _chain_key_type[]) => O;
export { _chain_fn as __chain };
