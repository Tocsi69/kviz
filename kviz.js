var pontok = 0;
var elsovalasz;
var masodikvalasz;
var harmadikvalasz;
var negyedikvalasz;
var otodikvalasz;

function elso(){
    var temp = document.getElementsByName("elsok");
    for(let i = 0; i < temp.length; i++){
        if(temp[i].checked){
            elsovalasz = temp[i].value;
        }
    }
}

function masodik(){
    var temp = document.getElementById("raketa").value;
    masodikvalasz = temp;
}

function harmadik(){
    var temp = document.getElementById("kekes").value;
    document.getElementById("kekeslabel").innerText = temp + " m";
    harmadikvalasz = temp;
}

function negyedik(){
    var temp = document.getElementById("tizenegy").value;
    negyedikvalasz = temp;
}

function otodik(){
    var temp = document.getElementById('telepules');
    otodikvalasz = temp.options[temp.selectedIndex].value;
}

function elsoell(){
    if(elsovalasz == "jo"){
        pontok++;
    }
    else{
        pontok-1;
    }
}

function masodikell(){
    if(masodikvalasz  == "Rakéta"){
        pontok++;
    }else{
        pontok-1;
    }
}

function ellenorzes(){
    elsoell();
    masodikell();
    console.log(pontok);
}