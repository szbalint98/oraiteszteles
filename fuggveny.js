export function parose(szam){
    let psE=false;
    if (typeof szam!=='number') {
        
    return"ez nem szam"
    
    }
    if (Number.isInteger(szam)) {
        psE=true;
    }
    return psE;
}