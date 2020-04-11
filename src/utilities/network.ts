export const installOfflineWatcher = (offlineUpdatedCallback: (arg0: boolean) => void) => {
    window.addEventListener('online', () => offlineUpdatedCallback(false));
    window.addEventListener('offline', () => offlineUpdatedCallback(true));
    offlineUpdatedCallback(navigator.onLine === false);
};