



let count=0;
function increment(){
    count=count+1;
    document.getElementById("counter").innerText=count;
}


function save(){
    
    let save = document.getElementById("savecount").textContent+=  + count +" - ";
    
    document.getElementById("counter").innerText=0;
    count=0;
}




