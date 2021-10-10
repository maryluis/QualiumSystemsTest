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
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return await response.json(); 
   
  }

  export function createNewItem(title, price, description) {
      postItem(urlItems, CreateItemObj(title, price, description));
  }
  
