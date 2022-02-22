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
        pontok += 3 ;
    }
    else{
        pontok -= 1;
    }
}

function masodikell(){
    if(masodikvalasz  == "Rakéta"){
        pontok += 2;
    }else{
        pontok -= 1;
    }
}

function harmadikell(){
    if(harmadikvalasz == "1014"){
        pontok += 1;
    }else{
        pontok -= 1;
    }
}

function negyedikell(){
    if(negyedikvalasz == "11"){
        pontok += 3;
    }else{
        pontok -= 1;
    }
}

function otodikell(){
    if(otodikvalasz == "Nagyigmand"){
        pontok += 1;
    }else{
        pontok -= 1;
    }
}

function vege(){
    var x = document.getElementById("gomb");
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    if(pontok < 0){
        pontok = 0;
        document.getElementById("pont").innerText = "Elért pontszámod: " + pontok;
    }else{
        document.getElementById("pont").innerText = "Elért pontszámod: " + pontok;
    }
}

function ellenorzes(){
    elsoell();
    masodikell();
    harmadikell();
    negyedikell();
    otodikell();
    vege();
}