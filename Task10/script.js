function CI(P, r, n, t){    
    return P* Math.pow(1+r/n, n*t);
}

console.log(CI(50000, 8, 1, 3));