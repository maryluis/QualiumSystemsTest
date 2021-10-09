import { urlEdit } from ".";
import { CreateItemObj } from ".";




export const editItem = async (id, data) =>{
    const response = await fetch(urlEdit(id), {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
   const newData = await response.json( );
 
   // now do whatever you want with the data  
    console.log(newData);
 };

 export function editItemPut(title, price, description, id) {
  editItem(id, CreateItemObj(title, price, description, id));
}
