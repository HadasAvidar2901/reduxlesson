import { useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function DontionList() {
    let arr = useSelector(st => st.arr);//פוקנציה לשליפת נתונים מהסטייט הכללי
    //הפוקנצי הזו מקבלת את כל הזטייט הכללי ואני בוחרת מה לשולף ממנו ולשמור בתוך משתנה

    return <>כל התרומות<ul>
        {arr.map(item => <li key={item.id}>
            <ListItem one={item} />
        </li>)}
    </ul></>
}