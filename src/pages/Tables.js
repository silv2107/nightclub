import Footer from "../components/Footer";
import Nav from "../components/Nav";
import TableButton from "../components/TableButton";
import "./Tables.scss";
import { TableContext } from "../context/TableNumberContext";
import { useContext, useState } from "react";
import axios from "axios";
import Copyright from "../components/Copyright";
import TitleSections from "../components/TtileSections";



const array = ["bSmall","bSmall","bMedium","bSmall","bLarge", "bSmall","bSmall","bMedium","bSmall","bLarge","bSmall","bSmall","bMedium","bSmall","bLarge"]
const Tables = () => {
    const { tableNumber } = useContext(TableContext);
    const [message, setMessage] = useState();



    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.table);
        const data = event.target

        //valideringer
        if(!data.name.value || data.name.value.length < 4 || !data.name.value.match(/\s/g)) {
            setMessage("Enter a valid First and Lastname");
            return
        }
        if(!data.table.value) {
            setMessage("Choose a table");
            return
        }
        if(data.phone.value.length !== 8) {
            setMessage("Enter an 8 digit valid number");
            return
        }
        if(!data.date.value) {
            setMessage("Choose a date");
            return
        }

        if(!data.email.value && !data.email.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            setMessage("Enter a valid Email");
            return
        }
        axios("http://localhost:4000/reservations")
        .then(response => {
            console.log(response.data);
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                if(element.table === data.table.value && element.date === data.date.value) {
                    console.log("This table is booked on this date");
                    return
                }
                
            }
            const info = {
                name: data.name.value,
                table: data.table.value,
                date: data.date.value,
                email: data.email.value,
                guests: data.guests.value,
                phone: data.phone.value
            }
            axios.post("http://localhost:4000/reservations", info)
            .then(response => {  
                setMessage("Thank you for booking our wonderfull table");             
                console.log(response.data)
            }
            )
            
        })

        
       
    }

    return ( 
        <div style={{background:"black"}}>
            <header style={{position:"fixed", top:"0", width:"100%"}}>
                <Nav/>
            </header>
            <main style={{padding:"100px 0 0 0"}}>
                <TitleSections name="BOOK TABLE"/>
                <div className="tableContainer">
                    {array.map((table, index)=> {
                        return <TableButton tableSizeClassName={table} number={index + 1}/>
                    })}
                </div>
                <form onSubmit={onSubmit} className="tableForm" style={{color:"white"}}>
                    <h1>Book a Table</h1>
                    <div className="columnInputWrapper">
                        <div className="firstColumnInput">
                            <input type="text" name="" id="name" placeholder="Your Name"/>
                            <input type="text" id="table" value={tableNumber} placeholder="Table Number" />
                            <select id="date" >
                                <option value="" disabled selected hidden>Select date</option>
                                <option value="2022-05-05T16:43:02.002Z">2022-05-05</option>
                                <option value="2022-05-10T16:43:02.002Z">2022-05-10</option>
                                <option value="2022-05-10T16:43:02.002Z">2022-05-17</option>
                                <option value="2022-05-10T16:43:02.002Z">2022-05-24</option>
                                <option value="2022-05-10T16:43:02.002Z">2022-05-30</option>
                                <option value="2022-05-10T16:43:02.002Z">2022-06-10</option>
                            </select>
                        </div>
                        <div className="secondColumnInput">
                            <input type="text" name="" id="email" placeholder="Your Email"  />
                            <input type="text" name="" id="guests" placeholder="Number of Guests" />
                            <input type="text" name="" id="phone" placeholder="Your Contact Number"/>
                        </div>
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className="submitTable" type="submit">Reserve</button>
                    {message ? <p>{message}</p> : null}
                </form>
            </main>
            <footer className="mainFooter">
                <Footer/>
                <Copyright/>
            </footer>
        </div>
     );
}
 
export default Tables;