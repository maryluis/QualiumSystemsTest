import { urlItems, urlSearch } from ".";

export function filterTitle(data, query) {
        let filteredData =  data.filter(function(el) {
            return el.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
        return filteredData
      }


export async function getItemsTool(page, query="", order, limit=10) {
    let response;
    let data;
    if( query === "") {
        response = await fetch(urlSearch(page, query, order, limit=10));  
        data= await response.json();
    } else {
        response = await fetch(urlItems); // I know that take all items isn't a good idea, but
        data = await response.json(); // the backend can't search by title, just by all keys. 
    }
    let filteredData = filterTitle(data, query); // So I take all items and search query here.
    let pages;
    if(query.length > 0){
        pages = Math.ceil(filteredData.length / limit);
    } else {
        pages = Math.ceil(+response.headers.get('X-Total-Count') / limit)
    }
    if(filteredData.length === 0) {
        pages = 1;
    }

    return {items: filteredData,
            pages: pages};
  }