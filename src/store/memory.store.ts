
import type  {UrlEntry} from "../types/index";

const store = new Map<String,UrlEntry>();

export function getOne(code:string) : UrlEntry | undefined{
    return store.get(code);
}

export function saveOne(entry:UrlEntry):boolean{
    store.set(entry.shortCode,entry);
    return true;
}

export function exist(code:string):boolean{
    return store.has(code);
}

export function getAll():IterableIterator<UrlEntry>{
    return store.values();
}