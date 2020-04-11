export const installMediaQueryWatcher = (mediaQuery: string, layoutChangedCallback: (arg0: boolean) => void) => {
    let mql = window.matchMedia(mediaQuery);
    mql.addListener((e) => layoutChangedCallback(e.matches));
    layoutChangedCallback(mql.matches);
};