export function handleAnchorClick (event: Event):void {
    event.preventDefault()
    const element = event.currentTarget as Element;
    if (!(element instanceof HTMLAnchorElement)) return;
    const anchorId = new URL(element.href).hash.replace('#', '')
    const anchor = document.getElementById(anchorId)
    window.scrollTo({
        top: anchor?.offsetTop,
        behavior: 'smooth'
    })
}
