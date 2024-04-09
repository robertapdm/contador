import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function Contador(){
//a sintaxe do useState é variávvel array[estado, setEstado] = useState (valor);
//estado = o estado atual do elemento
//setEstado = função utilizada para atualizar o estado

    const [numero, setNumero] = useState(0)
    
    function add(){
        if(numero < 20){
            setNumero (numero+1)
        }
    }

    function remove(){
        if (numero >0){
            setNumero (numero-1)
        }else{
            setNumero(0)
        }
    }

    function clear(){
        setNumero (0) //estado inicial
    }

    //toda função deve ser criada antes do return(), e chamar a função dentro do return(), ativando pelo evento, neste caso, evento de clicar.
    //Toda vez que clicar no botão o evento será disparada, cada botão tem um evento associado.
    //Sempre que necessário, fazer as verificações para garantir que a lógica seja validada, evitando erros.

return(
    <div class="container">
        <h1>Contador</h1>
        <div class="card">
            <div class="screen">
                <h2>{numero}</h2>
            </div>
            <div class="buttons">
                <button class="button" onClick={add}>Add <FontAwesomeIcon icon={faPlus} />
                </button>
                 <button class="button" onClick={remove}>Remove <FontAwesomeIcon icon={faMinus}/></button>
                <button  class="button"  onClick={clear}>Clear <FontAwesomeIcon icon={faEraser} />
</button>
            </div>
        </div>
    </div>
    )
}

export default Contador;