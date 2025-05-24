function hasNotch() {
    const div = document.createElement('div');
    div.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: env(safe-area-inset-left);
      height: env(safe-area-inset-top);
      pointer-events: none;
      visibility: hidden;
    `;
    document.body.appendChild(div);
    const hasInset = window.getComputedStyle(div).getPropertyValue('height') !== '0px';
    div.remove();
    return hasInset;
}

if (hasNotch()) {
    // Là thiết bị có notch → dùng padding hoặc set meta phù hợp
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')
        ?.setAttribute('content', 'black-translucent');
}