var nums = []

function cadastro(){
    var n = document.querySelector(`input#num`)
    if (n.value === ""){
        window.alert(`Preencha o campo!`)
        return
    }
    var valor = Number(n.value)
    nums.push(valor)
    var lista = document.querySelector(`#cadastrados`)
    lista.innerHTML = nums.join(`<br>`)
}

function analise(){
    if (nums.length === 0){
        window.alert(`ERRO | Nenhum valor cadastrado!`)
        return
    }
    var maiorNum = nums[0]
    var menorNum = nums[0]

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maiorNum){
            maiorNum = nums[i]
        }
        if (nums[i] < menorNum){
            menorNum = nums[i]
        }
    }

    var analisados = document.querySelector(`#analisados`)
    analisados.innerHTML = `Maior número da lista é ${maiorNum}<br>e menor número da lista é ${menorNum}`
}
