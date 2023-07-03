export default async function fetchWithAuth (url: string, body?: object, method?: string) {
    console.log("fetchWithAuth", url, body, method);
    const res = await fetch(url, {
        method: method || "GET",
        headers: {
            "authorization": `bearer ${localStorage.getItem("token") || ""}`,
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return await res.json();
}