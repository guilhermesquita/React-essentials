import Forms from './Forms'
import Button from './events/Button.js'

function Event(){

    function myEvent(){
        let dom = document.getElementsByTagName('button')[0]
        dom.innerHTML = "Fui ativado!"
    }

    return(
        <div>
            <p>Clique para disparar Event</p>

            <Button event={myEvent} text="Primeiro Evento"/>

            <button onClick={myEvent}>Ativar!</button>

            <Forms/>

        </div>
    )
}

export default Event