
// file for url and others data;

export const urlItems = "http://localhost:3000/items";

export const urlSearch = (page=1, query="", order="asc", limit=10 ) => {
    return `http://localhost:3000/items?_page=${page}&_limit=${limit}&q=${query}&_sort=price&_order=${order}`;
}

export const urlEdit = (id) => {
    return `http://localhost:3000/items/${id}`
}
