var objects = 
{   
    0:{name:"Bacco (riproduzione romana)",          price:1200,  country:"Italy"}, 
    1:{name:"Giustiniano (riproduzione romana)",    price:1500,  country:"Portugal"}, 
    2:{name:"Pavimentazione Geometrica",            price:700,   country:"Congo"}, 
}

document.addEventListener("DOMContentLoaded", function () 
{ 
    var imgId = window.location.search;
    var imgIdValue = imgId.replace("?imgId=", "");

    objInfo = objects[imgIdValue];

    var name = document.getElementById("name");
    var price = document.getElementById("price");
    var country = document.getElementById("country");
    
    name.innerHTML = objInfo.name;
    price.innerHTML = objInfo.price + "$"
    country.innerHTML = objInfo.country

})

function modifyAmount(param){
    var amount = document.getElementById("amount");
    var price = document.getElementById("price");

    var a = parseInt(amount.innerHTML)  // Make the amount an integer
    var p = price.innerHTML.replace(/\$/g, '');    
        p = parseInt(p)

        
    console.log(a, p)

    if (param == "add"){
        a += 1 
        p += objInfo.price;        
    }
    if (param == "rmv"){
        if (a == 1){
            alert("Minimun amount allowed is 1");
        }else{
            a -= 1 
            p -= objInfo.price;  
        }
    }

    console.log("after",a, p)
    
    amount.innerHTML = a
    price.innerHTML = p + "$"

}

function sendEmail() {
    var name = document.getElementById("name").innerHTML;
    var amount = document.getElementById("amount").innerHTML;

    const destinatario = 'joaorvalho@gmail.com';
    const assunto = 'Payment of producs';
    const corpo = 'Hi I\'m interested in buying ' + amount + " "+ name+ ". \nAre they still available?";

    // Codificar o corpo para garantir que caracteres especiais sejam tratados corretamente
    const corpoCodificado = encodeURIComponent(corpo);

    const link = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${corpoCodificado}`;

    // Abre o cliente de e-mail padrão do usuário
    window.location.href = link;
}