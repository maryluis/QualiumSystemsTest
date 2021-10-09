export const deleteItem = async (url) =>{
    await fetch(url, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
    });
 
//    const data = await response.json( );
 
//    // now do whatever you want with the data  
//     console.log(data);
 };