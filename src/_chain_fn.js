import { _chain } from './_chain';
export function _chain_fn(obj, or) {
    return (...keys) => (_chain(obj, ...keys) || or);
}
export { _chain_fn as __chain };
