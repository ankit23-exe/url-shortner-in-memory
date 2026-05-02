import {validateUrl} from "../utils/validator"
import {codeGen} from "../utils/shortcode"
import {exist,saveOne,getOne,getAll} from "../store/memory.store"
import type { UrlEntry } from "../types/index";
import { BASE_URL } from "../config";

export function createShortURL(longUrl:string) :string | false{
    if(validateUrl(longUrl)===false){
        return false;
    }
    let newcode = codeGen();

    while(exist(newcode)){
        newcode = codeGen();
    }
    const newEntry ={
        originalUrl:longUrl,
        shortCode:newcode,
        clickCount:0,
        createDate: new Date()
    }
    saveOne(newEntry);
    return `${BASE_URL}/${newcode}`
}

export function resolveShortUrl(code:string): UrlEntry | undefined{
    const entry = getOne(code)
    if (!entry) return undefined;
    entry.clickCount += 1;
    return entry;
}
export function getStats(){
    let totalcount =0;
    let totalclickcount =0;
    let array:UrlEntry[] = Array.from(getAll());
    totalcount = array.length;

    totalclickcount = array.reduce((sum,entry)=> sum+ entry.clickCount ,0);

    return {
        totalUrls:totalcount,
        totalClicks:totalclickcount

    }
}