export function parose(szam){
    let psE=false;
    if (typeof szam!=='number') {
        
    return"Ez nem szám"
    
    }
    if (Number.isInteger(szam)) {
        psE=true;
    }
    return psE;
}