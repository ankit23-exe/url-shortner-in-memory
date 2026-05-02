import { createShortURL, resolveShortUrl,getStats} from "../services/url.service";
import type { Request,Response } from "express";
import { getAll } from "../store/memory.store";

export function shortenHandler(req: Request, res: Response){
    const longurl = req.body?.longUrl;
    if(!longurl){
        return res.status(400).json({"error":"longUrl is required in body"});
    }
    let newurl = createShortURL(longurl);
    if(newurl===false){
        return res.status(400).json({"error":"send correct http/https url"});
    }
    return res.status(200).json({"newurl":`${newurl}`});
}

export function redirectHandler(req:Request, res:Response){
    const code = req.params.code as string ;
    if(!code) return res.status(404).json({"error":"code not in params"});
    const entry = resolveShortUrl(code);
    if(!entry) return res.status(404).json({"error":"entry not found"});
    return res.redirect(302,entry.originalUrl);
}

export  function statsHandler(req:Request, res:Response){
    res.status(200).json(getStats());

}

export  function getAl(req:Request, res:Response){
    const allEntries = Array.from(getAll());
    res.status(200).json(allEntries);
}