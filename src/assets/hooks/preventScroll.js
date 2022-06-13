export default function preventScroll(modal) {
    const state = modal === false ? `hidden` : `auto`;
    document.body.style.overflow = state;
}
