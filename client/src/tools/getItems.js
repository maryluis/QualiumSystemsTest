import { urlSearch } from ".";

export function filterTitle(data, query) {
        let filteredData =  data.filter(function(el) {
            return el.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
        return filteredData
      }


export async function getItemsTool(page, query="", order, limit=10) {
    const response = await fetch(urlSearch(page, query, order, limit=10));  
    let pages = Math.floor(Math.round(+response.headers.get('X-Total-Count') / limit));
     let data= await response.json();
     let filteredData = filterTitle(data, query);
     return {items: filteredData,
            pages: pages};
  }