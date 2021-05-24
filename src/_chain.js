import { isArray } from '@ctx-core/object';
export function _chain(ctx, ...keys) {
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
            const in_key_a1 = key;
            const args = in_key_a1.slice(1);
            key = in_key_a1[0];
            const key_a1 = key.split('.');
            const n1_key = key_a1.slice(0, key_a1.length - 1).join('.');
            if (n1_key)
                walk_key(n1_key);
            key = key_a1[key_a1.length - 1];
            head = head[key] && head[key](...args);
        }
        else {
            head = head[key];
        }
    }
    function walk_key(key) {
        const key_a1 = key.split('.');
        for (const key of key_a1) {
            head =
                head == null
                    ? head
                    : head[key];
        }
    }
}
