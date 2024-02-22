export function parose(szam){
    let psE=false;
    if (!szam.isNan(szam)) {
        
    return"ez nem szam"
    
    }
    if (szam.isInteger(szam)) {
        psE=true;
    }
    return psE;
}