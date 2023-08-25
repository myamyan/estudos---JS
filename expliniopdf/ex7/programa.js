export function acai(p, m, g, d){

    let vp=p*13.50;
    let vm=m*15;
    let vg=g*17.50;
    let vs= vp+vm+vg;
    let c=(d*vs)/100;
    vf=vs-c;
    
        
    return vf;
}