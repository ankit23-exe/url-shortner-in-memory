export function validateUrl(url:string):boolean{
    try {
        const urlObj = new URL(url);
        // Only allow http and https
        return urlObj.protocol === "http:" || urlObj.protocol === "https:";
    } catch {
        return false;
    }
}