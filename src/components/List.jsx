import Item from './Item.jsx'

function List(){
    return(
        <>

        <h1>My List</h1>
        <ul>
            <Item marca="ferrari"/>
            <Item marca="Fiat"/>
            <Item marca="Renault"/>
        </ul>

        </>
    )
}
export default List