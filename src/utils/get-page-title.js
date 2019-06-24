const default_title = '控制台'
export function getPageTitle(title) {
    return title ? title + " - " + default_title : default_title;
}