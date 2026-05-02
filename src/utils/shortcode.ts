export function codeGen():string{
    const chars = "ABJAJAJCDEFGHIJKLIAIAIAMNOP30104492QRSTUVWXYZabJAJVIAQOFNAcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    
    for(let i = 0; i < 6; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
}