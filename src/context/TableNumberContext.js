import { createContext, useState } from "react";

export const TableContext = createContext();

const TableProvider = ({ children }) => {
    const [tableNumber, setTableNumber] = useState("");

    return ( 
        <TableContext.Provider value={{ tableNumber, setTableNumber }}>
            {children}
        </TableContext.Provider>
     );
}
 
export default TableProvider;