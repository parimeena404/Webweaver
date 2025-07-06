function genTicket(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random()*10);
    }
}

function sum(arr){
    return arr.reduce((sum, val) => sum + curr, 0);
}

export{genTicket};

