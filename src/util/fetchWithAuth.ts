export default function fetchWithAuth (url: string) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Authorization": localStorage.getItem("token") || ""
        }
    }).then((res) => res.json())
}