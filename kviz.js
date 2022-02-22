var pontok = 0;
var elsovalasz;

function elso(){
    var temp = document.getElementsByName("elsok");
    for(let i = 0; i < temp.length; i++){
        if(temp[i].checked){
            console.log(temp[i].value)
            elsovalasz = temp[i].value;
        }
    }
}

function masodik(){
    
}

function ellenorzes(){
    console.log(elsovalasz);
}