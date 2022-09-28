import '../CSS/home.css';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/firebase';
import {useNavigate} from 'react-router-dom'
import AddMeal from './AddMeal';
import { deleteDoc,  doc } from 'firebase/firestore';
import OrderList from './listOfOrders';




function HomeAdmin(){
  const navigate = useNavigate()
    const [meals, setMeals] = useState([]);
    const [isAddItem,setIsAddItem] = useState('meals');
    useEffect(()=>{
        const getData= async ()=>{
         let data=await getDocs(collection(db,"restaurant"))
          setMeals(
            data.docs.map((doc)=>(
              doc.data()
            )
          )
          )
        }
        getData()
      },[])

         const [menu, setMenu] = useState([])
      //getting Menu
    const getMenu = async () => {
      let data = await getDocs(collection(db, "restaurant"))
      setMenu(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(data.docs.map((doc) => ({ ...doc.data(), ID: doc.id })))
  }


  useEffect(() => {
      getMenu()
  }, [])
  console.log(menu);
  

      function deleteHotel(id) {
       
        console.log('meals',meals)
       console.log('i am clicked',{id})
       console.log(id)
        const getDoc = doc(db, 'restaurant', id)
        deleteDoc(getDoc).then(() => {
            alert('deleted successfully')
        }).catch(err => {
            console.log(err.message)
        })

    }

    return(
        <div className='cover'>
            <div className='main'>
                 <div className='logo'></div>
                 <div className='text'>
                    <h1 style={{color: 'white'}}>Administrator</h1>
                 </div>
                 
                 <div className='line'></div>
                 <div className='icon1'></div>
                 <div className='textIcon1' style={{color: 'white'}}><h4>Dashboard</h4></div>
                 <div className='icon2'></div>
                 <div className='textIcon2' style={{color: 'white'}}><h4>History</h4></div>
                 <div className='icon3'></div>
                 <div className='textIcon3' style={{color: 'white'}}><h4 onClick={()=>{setIsAddItem('form')}}>Add Menu Item</h4></div>
                 <div className='icon4'></div>
                 <div className='textIcon4' style={{color: 'white'}}><h4 onClick={()=>{setIsAddItem('list')}}>List of Orders</h4></div>
                 <div className='icon5'></div>
                 <div className='textIcon5' style={{color: 'white'}}><h4>Log Out</h4></div>

         </div>
            
            <div className='submain'>
                <div className='stats'>

                  <div>
                     <span>20</span><br></br>
                     <span>Users</span>
                  </div>
                  <div>
                     <span>20</span><br></br>
                     <span>Orders</span>
                   </div>
                  <div>   
                     <span>20</span><br></br>
                     <span>Total Pending</span> 
                    </div>
                </div>
                  {isAddItem==='meals'&&
                    meals.map((res,index)=>(
                      <>
                          <div className='card1' key={index}>
                             <img src={res.image} alt='meal1' className='img'/>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}>{res.name}</span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}>{res.category}</span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}>{res.amount}</span>
                             <div className='buttons'>
                                 <button>Edit</button><br></br>
                                 <button onClick={()=>{deleteHotel(index)}}>Delete</button>
                             </div>

                    </div>
                      </>
                    )) 
                  }
               
                  {
                   isAddItem==='form' && <AddMeal setIsAddItem={setIsAddItem} />
                  }
                  {
                    isAddItem==='list'&& <OrderList  setIsAddItem={setIsAddItem}/>
                  }
                    

              
         </div>
        </div>
                
    )
}
export default HomeAdmin