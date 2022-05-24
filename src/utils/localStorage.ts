export function add (key: string, data: {}) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function get (key: string) {
    return JSON.parse(localStorage.getItem(key) || '')
}