import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Page3(props) {
  const [finalitems, setFinalitems] = useState([]);
  const [prodtotal, setProdtotal] = useState("");
  const [prodqty, setProdqty] = useState("");
  const params = useParams();
  const { somex } = params;
  console.log("somex is" + somex);

  async function showdata() {
    let somedata = { 'customer': somex };

    await fetch("http://127.0.0.1:8000/cartget/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(somedata),
    })
      .then((response) => response.json())
      .then((data) => {
        // let x = data["formdata"]["msg"];
        // let cc= json.loads(data)
        setFinalitems(data);
        console.log(data);
        const result=data.reduce((total,currval)=>total=total+currval.getprice,0);
        console.log("the total is "+result)
        const numprod=data.reduce((totaln,currvaln)=>totaln=totaln+currvaln.qty,0);
        console.log("the total qty is "+numprod)
        setProdtotal(result)
        setProdqty(numprod)

        
      })
      .catch((error) => console.error(error));
  }

  async function handledelete(id) {
    let path=`http://127.0.0.1:8000/delete/${id}`
    await fetch(path,{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    showdata();
  },[finalitems]);

  return (
    <>
      {/* <h1>Checkout Page</h1> */}
      <Nav person={somex} pqty={prodqty}/>
      <div className="container-fluid mt-4">
        <div className="row">
          {/* product list */}
          <div className="col-md-8 ">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-11 productlistcol ">
                {/* title */}
                <h5 className="text-start mt-2 mr-1">Shopping cart</h5>
                <div className="container ">
                  <div className="table-responsive newtable0">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Sr.No.</th>
                          <th>Product Name</th>
                          <th>Qty</th>
                          <th>customer</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="table-responsive newtable">
                    <table className="table">
                      <tbody>
                        {finalitems.map((value, i) => (
                          <tr>
                            <td id="td1"> {i + 1} </td>
                            <td id="td2">{value.product}</td>
                            <td id="td3">{value.qty}</td>
                            <td id="td4">{value.getprice}</td>
                            <td id="td5">
                              <button className="btn btn-danger" onClick={()=>{handledelete(value.id)}}>delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* <table>
                    <thead>
                      <tr>
                        <th>Sr.No.</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                       finalitems.map((collected)=>(
                          <tr>
                            <td>{collected.id}</td>
                            <td>{collected.product}</td>
                          </tr>
                       )) 
                      }
                    </tbody>
                  </table> */}
                </div>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-5 ">
                    <p className="mt-5 text-center">Subtotal:{prodtotal}</p>
                    <p className="mt-1 text-center">Shipping: 0</p>
                    <hr />
                    {/* <p className="mt-1 text-center"> <b>Total:</b> </p> */}
                  </div>
                  <div className="row bottom-row">
                    <div className="col-md-4 ">
                      <button type="button" className="btn btn-primary">
                      Continue Shopping
                      </button>
                    </div>
                    <div className="col-md-4 "></div>
                    <div className="col-md-3">
                      <p className="text-start mr-5">
                        <b>Total:{prodtotal}</b>
                      </p>
                    </div>
                    <div className="col-md-1 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* billing     */}
          <div className="col-md-4 acol-md">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-10 billingcol">
                <h5 className="text-start mt-2 mr-1">Payment Info</h5>
                <div className="row">
                  <div className="col-md-8 ">
                    {/* <h5 className="text-start mt-3">Mode of Payment</h5> */}
                    <h5 className="text-start mt-3 put"></h5>
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

export default Page3;
