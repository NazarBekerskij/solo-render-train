import Item from "../Item/Item";

function List ({games}) {
return (
    <ul>{games.map((game) => {
return (      <Item key={game.id} {...game}/>
    )})}</ul>
)
}



export default List