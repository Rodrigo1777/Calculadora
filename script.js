function insert(num){
    var numb=document.getElementById('anws').innerHTML;
    document.getElementById('anws').innerHTML = numb + num;
}
function clean(){
    document.getElementById('anws').innerHTML = "";
}
function back(){
    var anws = document.getElementById('anws').innerHTML;
    document.getElementById('anws').innerHTML = anws.substring(0, anws.length-1);
}
function calc(){
    var anws = document.getElementById('anws').innerHTML;
    if(anws){
        document.getElementById('anws').innerHTML = eval(anws);
    }
    else{
        document.getElementById('anws').innerHTML = "0";
    }
}

