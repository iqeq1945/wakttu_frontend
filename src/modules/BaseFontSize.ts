interface ViewportConfig {
  baseFontSize: number;
  designWidth: number;
  designHeight: number;
  mobileDesignWidth: number;
  mobileDesignHeight: number;
}

class FontSizeManager {
  private static instance: FontSizeManager;
  private innerWidth: number = 0;
  private innerHeight: number = 0;
  private fontSize: number = 16;

  private readonly defaultConfig: ViewportConfig = {
    baseFontSize: 16,
    designWidth: 1920,
    designHeight: 1080,
    mobileDesignWidth: 750,
    mobileDesignHeight: 1336,
  };

  private constructor() {}

  public static getInstance(): FontSizeManager {
    if (!FontSizeManager.instance) {
      FontSizeManager.instance = new FontSizeManager();
    }
    return FontSizeManager.instance;
  }

  public handleResize(config: Partial<ViewportConfig> = {}): void {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    if (this.shouldSkipUpdate(innerWidth, innerHeight)) return;

    const mergedConfig = { ...this.defaultConfig, ...config };
    const fontSize = this.calculateFontSize(mergedConfig);

    this.updateFontSize(fontSize);
    this.handleSystemFontScaling(fontSize);
    this.handleHarmonyOSViewport();
  }

  private shouldSkipUpdate(innerWidth: number, innerHeight: number): boolean {
    if (innerWidth === this.innerWidth && innerHeight === this.innerHeight) {
      return true;
    }
    this.innerWidth = innerWidth;
    this.innerHeight = innerHeight;
    return false;
  }

  private calculateFontSize(config: ViewportConfig): number {
    const { designWidth, designHeight, mobileDesignWidth, mobileDesignHeight } =
      config;

    const ratio = Math.min(
      this.innerWidth / designWidth,
      this.innerHeight / designHeight
    );
    return config.baseFontSize * ratio;
  }

  private updateFontSize(fontSize: number): void {
    const html = document.querySelector('html') as HTMLElement;

    if (html) {
      html.style.fontSize = fontSize + 'px';
      this.fontSize = fontSize;
    }
  }

  private handleSystemFontScaling(fontSize: number): void {
    const html = document.querySelector('html') as HTMLElement;

    if (html) {
      const realFontSize = Number(
        window
          .getComputedStyle(html)
          .getPropertyValue('font-size')
          .replace('px', '')
      );

      if (realFontSize !== fontSize) {
        html.style.fontSize = (fontSize * fontSize) / realFontSize + 'px';
        this.fontSize = (fontSize * fontSize) / realFontSize;
      }
    }
  }

  private handleHarmonyOSViewport(): void {
    if (window.navigator.userAgent.includes('HarmonyOS')) {
      const viewportMeta = document.querySelector('meta[name=viewport]');
      const radio = window.devicePixelRatio;

      if (viewportMeta) {
        const content = `width=${window.outerWidth * radio}px, initial-scale=${(
          1 / radio
        ).toFixed(3)}, maximum-scale=${(1 / radio).toFixed(
          3
        )}, user-scalable=0`;
        viewportMeta.setAttribute('content', content);
      }
    }
  }
}

// 외부에서 사용할 수 있는 싱글톤 인스턴스 export
export const fontSizeManager = FontSizeManager.getInstance();
