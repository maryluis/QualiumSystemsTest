import { urlItems } from ".";

export function CreateItemObj(title, price, description, id){

    return(
        {
            title: title,
            price: +price,
            description: description,
            id: id || Date.now()
        }
    )
}




export async function postItem(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); 
   
  }

  export function createNewItem(title, price, description) {
      postItem(urlItems, CreateItemObj(title, price, description));
  }
  
