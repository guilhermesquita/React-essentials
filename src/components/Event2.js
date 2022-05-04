import Button from './events/Button.js'

function Event2(){

    function myEvent(){
        let dom = document.getElementsByTagName('button')[0]
        dom.innerHTML = "Fui ativado!"
    }

    return(
        <div>

         
        </div>
    )
}

export default Event2