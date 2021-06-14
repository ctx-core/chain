import { isArray } from '@ctx-core/object';
export function chain_(ctx, ...keys) {
    let head = ctx;
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (typeof key === 'function') {
            process_key(key.call(head, head));
            continue;
        }
        process_key(key);
    }
    return head;
    function process_key(key) {
        if (typeof key === 'string') {
            walk_key(key);
        }
        else if (isArray(key)) {
            const in_key_a = key;
            const args = in_key_a.slice(1);
            key = in_key_a[0];
            const key_ = key.split('.');
            const n1_key = key_.slice(0, key_.length - 1).join('.');
            if (n1_key)
                walk_key(n1_key);
            key = key_[key_.length - 1];
            head = head[key] && head[key](...args);
        }
        else {
            head = head[key];
        }
    }
    function walk_key(key) {
        const key_ = key.split('.');
        for (const key of key_) {
            head =
                head == null
                    ? head
                    : head[key];
        }
    }
}
export { chain_ as _chain, };
//# sourceMappingURL=src/chain_.js.map