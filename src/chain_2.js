import { chain_ } from './chain_';
export function chain_2(obj, or) {
    return (...keys) => (chain_(obj, ...keys) || or);
}
export { chain_2 as __chain };
//# sourceMappingURL=src/chain_2.js.map