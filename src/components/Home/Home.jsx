import React from 'react';
const mystyle = {
    backgroundColor: "grey",
    color:"white",
    marginTop: "10px",
    padding:"30px",
    fontFamily: "serif"
  };
const Home = () => {
  return(
    <div>
      <div  className="container" style={mystyle}>
      <h1 style={{textAlign:"center", fontFamily:'Arial'}}><b>Stock Management System</b></h1>
        <h4 style={{textAlign:"center"}}><b>Inventory management software is a software system for tracking inventory levels, orders, sales and deliveries. 
            It can also be used in the manufacturing industry to create a work order, bill of materials and other production-related documents.</b></h4>
     </div>
     <img src="trading.jpg" alt="Paris" width="1110" height="400"/>
     </div>
     
  );
};
export default Home;   