
export function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeHTML(htmlString) {
    return htmlString.replace(/<[^>]+>/g, '');
}