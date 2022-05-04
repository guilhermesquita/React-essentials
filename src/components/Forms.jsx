import { useState } from 'react'

function Form(){

    function cadastrarUser(e){
        e.preventDefault()
        let reques = document.getElementsByClassName('request')[0]
        reques.innerHTML = "Usuário Cadastrado"
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return(
        <div>
            <h1>Cadastro</h1>

            <form onSubmit={cadastrarUser}>

                <label htmlFor="name">Nome:</label>
                <div>
                    <input 
                    
                    type='text' 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}

                    >

                    </input>
                </div>

                <label htmlFor="password">Senha:</label>

                <div>
                    <input 

                    type='password' 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha"
                    onChange={(e) => setName(e.target.value)}

                    >

                    </input>
                </div>


                
                <div>

                    <input 
                    
                    type='submit' value="Cadastrar">

                    </input>
                
                </div>

            </form>

                <div className="request"></div>

        </div>
    )

}

export default Form