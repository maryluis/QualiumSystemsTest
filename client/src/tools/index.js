import { CreateItemObj, postItem, createNewItem } from "./createItem";
import { urlItems, urlSearch, urlEdit } from "./data";
import {getItemsTool} from "./getItems";
import { editItemPut } from "./editItem";
import {deleteItem} from "./deleteItem";
import { objToArr } from "./objToArr";

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));


export {CreateItemObj, deleteItem, editItemPut, urlSearch, urlEdit, postItem, urlItems, createNewItem, getItemsTool, objToArr, delay};