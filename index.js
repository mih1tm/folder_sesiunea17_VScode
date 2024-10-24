



function check_number(){
    let x = Number(document.getElementById("input_1").value)

    /*if( x < 0){
        alert("numar negativ")
    }
    else if( x < 9){
        alert("cifra")
    }
    else if(x >= 10){
        alert("nr pozitiv")
    }
    else if(x>100){
        alert("de ordinul sutelor")
    }
    else if(x>1000){
        alert("de ordinul miilor")
    }
    else if ( x == 0){
        alert("de ordinul miilor")
    }*/
    switch(x){
        case 0: alert("numar zero");break
        case 9: alert("numar 9");break
        case 100: alert("numar 100");break
        default: alert("nu am gasit")
    }
}