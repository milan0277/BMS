import axios from "axios"
import { useEffect, useState } from "react"
import './CustomerList.css'
// import { Link } from "react-router-dom"
function Customerlist(){

    const [data,setdata]=useState([])
    const [modal, setModal] = useState(false);
    function getdata(){
        axios.get('https://65e2e74188c4088649f4fef4.mockapi.io/CRUD/Milan/CRUD-poject').then((res)=>{
            console.log(res)
            console.log(res.data)
            setdata(res.data)
        })
        
    }
   
    

   
    
    useEffect(()=>{
        getdata()
        
    },[])
    const toggleModal = () => {
      setModal(!modal);
      
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

 
    return(
        <>
        <h1>Customer List</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Client Name</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  {
    data.map((eachitems)=>{
        return(
            <>
             <tbody>
    <tr>
      <th scope="row">{eachitems.id}</th>
      <td>{eachitems.name}</td>
      <td>{eachitems.Date}</td>
      <td><button onClick={toggleModal}> Bill</button></td>
            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Bill Generated</h2>
            <p>
              sorry i couldn't complete the project on time and thank u for giving me this opportunity
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </tr>
  </tbody>
            </>
        )
    }
    )
  }
 
</table>

        </>
    )
}
export default Customerlist
