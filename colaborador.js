var seletor = document.getElementById('seletor')
var dive = document.getElementById('divv')
var prm = window.prompt("Digite sua crendencial para continuar:")

var array = [" 29 anos, Carlos Andre - Auxiliar de RH",
    " 52 anos, Lion Aragão - Administradoor",
    " 41 anos, Wanda Santos - Técnino Administrativo",
    " 19 anos, Marcela Domain - Estagiária de Administração",
    " 33 anos, Alda Matiê - Estagiária",
    " 22 anos, Flávio Elder - Manutenção",
    " 28 anos, Leon Garcia - Manutenção",
    " 18 anos, Israel Veloso - Manutenção",
    " 29 anos, Marvel Diones - Estagiário"]

function consultar() {

    if (prm != "48700") {
        window.alert("Acesso Negado")
    }else{

        var total = array.length
        var maior = array[0]
        var menor = array[0]

        if (prm == "48700") {
            for (const element in array) {
                if (array[element] > maior){
                    maior = array[element]
                }
                if (array[element] < menor) {
                    menor = array[element]
                }
                    
                }
                dive.innerHTML = `<p>Total de colaboradores: ${total}</p>`
                dive.innerHTML += `<p>A maior idade entre os colaboradores, ${maior}</p>`
                dive.innerHTML += `<p>A menor idade entre os colaboradores, ${menor}</p>`
                
            }
        
        }
        
    }
   
