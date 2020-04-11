export const installRouter = (locationUpdatedCallback: (arg0: Location, arg1: MouseEvent | PopStateEvent | HashChangeEvent | null) => void) => {
    document.body.addEventListener('click', e => {
        if (e.defaultPrevented || e.button !== 0 ||
            e.metaKey || e.ctrlKey || e.shiftKey)
            return;
        const anchor = e.composedPath().filter(n => (n as HTMLElement).tagName === 'A')[0];
        if (!anchor || (anchor as unknown as Event).target ||
            (anchor as HTMLElement).hasAttribute('download') ||
            (anchor as HTMLElement).getAttribute('rel') === 'external')
            return;
        const href = (anchor as HTMLAnchorElement).href;
        if (!href || href.indexOf('mailto:') !== -1)
            return;
        const location = window.location;
        const origin = location.origin || location.protocol + '//' + location.host;
        if (href.indexOf(origin) !== 0)
            return;
        e.preventDefault();
        if (href !== location.href) {
            window.history.pushState({}, '', href);
            locationUpdatedCallback(location, e);
        }
    });

    window.addEventListener('popstate', e => locationUpdatedCallback(window.location, e));
    //hasn't been tested
    window.addEventListener('hashchange', e => locationUpdatedCallback(window.location, e));
    locationUpdatedCallback(window.location, null /* event */);
};