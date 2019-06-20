const default_title = 'My Admin Demo'
export function getPageTitle(title) {
    return title ? title + " - " + default_title : default_title;
}