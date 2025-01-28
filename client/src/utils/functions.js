export function isValidUrl(url) {
    const urlPattern = /^(https?:\/\/)([a-zA-Z0-9.-]+)(:[0-9]{1,5})?(\/[^\s]*)?$/;
    return urlPattern.test(url);
}
