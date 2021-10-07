export function CreateItemObj(title, price, description){

    return(
        {
            title: title,
            price: price,
            description: description,
            id: Date.now()
        }
    )
}




export async function postItem(url = '', data = {}) {
    debugger
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
    debugger
    return await response.json(); 
   
  }

  export function createNewItem(title, price, description, url) {
      postItem(url, CreateItemObj(title, price, description));
  }
  
