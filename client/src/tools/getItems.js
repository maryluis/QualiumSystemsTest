import { urlItems } from ".";

export async function getItemsTool() {
    const response = await fetch(urlItems)     
     let data= await response.json(); 
     return data
  }