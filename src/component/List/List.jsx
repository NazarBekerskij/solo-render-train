import Item from "../Item/Item";
import { GridList } from "./List.styled";

function List ({data}) {
    return (
        <GridList>
            {data.map((item) => {
                return (
                    <Item 
                        key={item.id} 
                        name={item.name}
                        location={item.location}
                        speaker={item.speaker}
                        type={item.type}
                        price={item.price}
                        seats={item.seats}
                        level={item.level}
                        format={item.format}
                        start={item.time.start} 
                        end={item.time.end}     
                    />
                );
            })}
        </GridList>
    );
}

export default List;