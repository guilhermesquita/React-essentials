function Pessoa({nome, idade, prof, foto}){

    return(
        <div>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {prof}</p>
            <img src={foto} alt={nome}/>
        </div>
    )

}
export default Pessoa