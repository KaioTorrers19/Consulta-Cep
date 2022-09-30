const cep = document.querySelector("#cep") 

const showData = (result) =>{
    for(const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#"+campo).value = result[campo]
            
        }
    }
}


cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-", "")
    const options ={
        methode: 'GET',
        mode: 'cors',
        cache:'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    // se der certo traga a resposta para mim no formato .json
    .then(Response=> {Response.json()
        .then(data => showData(data))
    })
        .catch(error => console.error(error))

})