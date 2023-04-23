export type DebounceFunction = (...props: unknown[]) => unknown;

export function debounce(
    func: DebounceFunction,
    wait = 200,
    immediate = false
): EventListenerOrEventListenerObject {
    let timeout: number | undefined;
    return function setDebounce(this: unknown, ...props: unknown[]): void {
        const later = (): void => {
            timeout = undefined;
            if (!immediate) {
                func.apply(this, props);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow) {
            func.apply(this, props);
        }
    };
}
