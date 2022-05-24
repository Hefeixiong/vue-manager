export function add (key: string, data: {}) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function get (key: string) {
    //没有做localStorage为空的逻辑
    //@ts-ignore 
    return JSON.parse(localStorage.getItem(key)) || ''
}