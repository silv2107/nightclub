import "./TableButton.scss";
import { useContext } from "react";
import { TableContext } from "../context/TableNumberContext";

const TableButton = ({ tableSizeClassName, number }) => {
    const { setTableNumber } = useContext(TableContext)

    const numberRegister = () => {
        setTableNumber(number);
    }
    return ( 
        <button onClick={numberRegister} className={tableSizeClassName + " sameValue"}>
            {number}
        </button>
     );
}
 
export default TableButton;