let _innerWidth = 0;
let _innerHeight = 0;
let _fontSize = 16;
let _width = 0, _height = 0;

export function handleResize(baseFontSize: number = 16) {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    const width = Math.max(innerWidth, innerHeight);
    const height = Math.min(innerWidth, innerHeight);

    if (innerWidth === _innerWidth && innerHeight === _innerHeight) {
        return;
    } else {
        _innerWidth = innerWidth;
        _innerHeight = innerHeight;
    }

    const fontSize: number = calculateFontSize(baseFontSize, innerWidth, innerHeight);

    updateFontSize(fontSize);
    handleSystemFontScaling(fontSize);
    handleHarmonyOSViewport();
}

function calculateFontSize(baseFontSize: number, innerWidth: number, innerHeight: number): number {
    const designWidth = innerHeight >= innerWidth ? 750 : 1920;
    const designHeight = innerHeight >= innerWidth ? 1336 : 1080;

    const ratio = Math.min(innerWidth / designWidth, innerHeight / designHeight);
    return baseFontSize * ratio;
}

function updateFontSize(fontSize: number): void {
    const html = document.querySelector("html") as HTMLElement;

    if (html) {
        html.style.fontSize = fontSize + "px";
        _fontSize = fontSize;
    }
}

function handleSystemFontScaling(fontSize: number): void {
    const html = document.querySelector("html") as HTMLElement;

    if (html) {
        const realFontSize = Number(window.getComputedStyle(html).getPropertyValue("font-size").replace("px", ""));

        if (realFontSize !== fontSize) {
            html.style.fontSize = (fontSize * fontSize) / realFontSize + "px";
            _fontSize = (fontSize * fontSize) / realFontSize;
        }
    }
}

function handleHarmonyOSViewport(): void {
    if (window.navigator.userAgent.includes("HarmonyOS")) {
        const viewportMeta = document.querySelector("meta[name=viewport]");
        const radio = window.devicePixelRatio;

        if (viewportMeta) {
            const content = `width=${window.outerWidth * radio}px, initial-scale=${(1 / radio).toFixed(3)}, maximum-scale=${(1 / radio).toFixed(3)}, user-scalable=0`;
            viewportMeta.setAttribute("content", content);
        }
    }
}
