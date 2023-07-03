export default function fetchWithAuth (url: string, body?: object, method?: string) {
    return fetch(url, {
        method: method || "GET",
        headers: {
            "authorization": `bearer ${localStorage.getItem("token") || ""}`
        },
        body: JSON.stringify(body)
    }).then((res) => res.json())
}