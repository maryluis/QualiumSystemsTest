export const deleteItem = async (url) =>{
    await fetch(url, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
    });
 };