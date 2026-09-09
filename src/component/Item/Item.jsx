import { Card, Title, Text } from './Item.styled'; 
import { PiCityBold } from "react-icons/pi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SiInfinityfree } from "react-icons/si";
import { IoMdPricetags } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";

import { formatDate } from "../../format/formatDate";


function Item({ name, location, speaker, type, price, seats, level, format, start, end }) {
  return (
    <Card>
      <Title>{name}</Title>
      <Text><PiCityBold /> {location}</Text>
      <Text><MdDriveFileRenameOutline /> {speaker}</Text>
      <Text><SiInfinityfree /> {type}</Text>
      <Text><IoMdPricetags /> {price}</Text>
        <Text><MdCalendarMonth /> {formatDate(start, end)}</Text>
      <Text><MdCalendarMonth /> {seats}</Text>
      <Text><SiLevelsdotfyi /> {level}</Text>
      <Text><FaWpforms /> {format}</Text>
    </Card>
  );
}

export default Item;