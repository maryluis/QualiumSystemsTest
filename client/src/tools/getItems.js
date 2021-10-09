import { urlSearch } from ".";

export function filterTitle(data, query) {
        let filteredData =  data.filter(function(el) {
            return el.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
        return filteredData
      }


export async function getItemsTool(page, query="", order, limit=10) {
    const response = await fetch(urlSearch(page, query, order, limit=10));  
    let data= await response.json();

    let filteredData = filterTitle(data, query);
    let pages;
    if(query.length > 0){
        pages = Math.ceil(filteredData.length / limit);
    } else {
        pages = Math.ceil(+response.headers.get('X-Total-Count') / limit)
    }
    if(pages === 0) {
        pages = 1;
    }

    return {items: filteredData,
            pages: pages};
  }