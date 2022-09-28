import '../CSS/list.css';


function OrderList({setIsAddItem}){
    return(
        <>
              <div className='submain1'>
                {/* <div className='stats'>

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
                </div> */}
                      <>
                          <div className='card' >
                          
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                          </div>
                          <div className='card' >
                         
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                          </div>
                          <div className='card' >
                           
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                          </div>
                          <div className='card' >
                          
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                          </div>
                          <div className='card' >
                             
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                          </div>
                          <div className='card' >
                         
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                          </div>
                          <div className='card' >
                      
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                          </div>
                          <div className='card' >
                          
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Box Star</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>Lunch</h1></span>
                             <span style={{color: 'black', fontSize: 18, fontWeight: 500}}><h1>R79.90</h1></span>
                             <button onClick={(e) => { setIsAddItem('meals') }}>Back</button><br></br>
                          </div>
                      </>
         </div>
        </>
    )
}
export default OrderList;