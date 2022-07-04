import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

function Shop(props) {
  const params = useParams();
  const { somevalue } = params;

  // setPerson({somevalue})
  console.log({somevalue})
  let somevar={somevalue}
  console.log(somevar)

  const [items, setItems] = useState([]);
  const [number, setNumber] = useState("");
  const [finalitems1, setFinalitems1] = useState([]);
  const [prodqty, setProdqty] = useState([]);

  const showPlan = () => {
    axios.get("http://127.0.0.1:8000/productlist/").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  async function handleadd(id,p){
    let somedata = { "customer":somevalue,"product": p, "qty":1,"status":'addtocart'};
    
    console.log(id)
    console.log(p)
    await fetch("http://127.0.0.1:8000/ordercreate/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(somedata),
    })
      .then((response) => response.json())
      .then((data) => {
        // let x = data["formdata"]["msg"];
        console.log(data);
        
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    showPlan();
    console.log(number)

    let somedata = { 'customer': somevalue };

    fetch("http://127.0.0.1:8000/cartget/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(somedata),
    })
      .then((response) => response.json())
      .then((data) => {
        // let x = data["formdata"]["msg"];
        // let cc= json.loads(data)
        setFinalitems1(data);
        const numprod=data.reduce((totaln,currvaln)=>totaln=totaln+currvaln.qty,0);
        console.log("the total qty is "+numprod)
        setProdqty(numprod)

        
      })
      .catch((error) => console.error(error));
     
  });

  return (
    <>
      <Nav person={somevalue} pqty={prodqty}/>

      <div className="container mt-3 shopmaincontainer">
        <div className="row shopadiv">
          {/* side panel */}
          <div className="col-lg-2 shadow-lg rounded shopacol">
            {/* <h1>side panel</h1>
            <h1>{somevalue}</h1> */}
            
          </div>

          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-1 "></div>

              {/* list of items */}
              <div className="col-lg-11 shadow-lg rounded try1 ">
                <div className="container">
                  <img
                    src="https://cdna.artstation.com/p/assets/images/images/036/002/188/large/m-n-vinit-img-20210322-204116-186.jpg?1616482578"
                    alt=""
                    style={{ width: "53rem", height: "22rem" }}
                    className="img-fluid mt-3"
                  />
                </div>
                <div className="container">
                  <h2 className="mt-3 shadow-lg"> Products</h2>
                </div>
                <div className="d-flex">
                    <div class="d-flex justify-content-around try">
                  {
                  items.map((values,id) => {
                    return <Cards key={id} id={values.id} values={values} sendadd={handleadd}/>
                  })
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop;
