import React from "react";

function Checkout() {
    return (
        <>
            <h1>Checkout Page</h1>
            <div className="container-sm-fluid adiv">
                <div className="row">

                    {/* product list */}
                    <div className="col-lg-8 ">
                        <div className="row">
                            <div className="col-sm-1 "></div>
                            <div className="col-sm-11 productlistcol">

                                {/* title */}
                                <h5 className="text-start mt-2 mr-1">Shooping cart</h5>

                                {/* table */}

                                <table className="tableresponsive-sm mt-4 table-fixed ">
                                    <thead className="tablehead" >
                                        <tr>
                                            <th scope="col-sm">Products</th>
                                            <th scope="col-sm">Qty</th>
                                            <th scope="col-sm">Total Price</th>
                                            <th scope="col-sm"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="tablebody">

                                        <tr className="tablerow">
                                            <td>Product-1</td>
                                            <td> <input type="number" name="quantity" min={0} className="quantity" /> </td>
                                            <td>Amount</td>
                                            <td><button type="button" className="btn btn-secondary">Delete</button></td>
                                        </tr>
                                        <tr className="tablerow">
                                            <td>Product-1</td>
                                            <td> <input type="number" name="quantity" min={0} className="quantity" /> </td>
                                            <td>Amount</td>
                                            <td><button type="button" className="btn btn-secondary">Delete</button></td>
                                        </tr>
                                        <tr className="tablerow">
                                            <td>Product-1</td>
                                            <td> <input type="number" name="quantity" min={0} className="quantity" /> </td>
                                            <td>Amount</td>
                                            <td><button type="button" className="btn btn-secondary">Delete</button></td>
                                        </tr>
                                        <tr className="tablerow">
                                            <td>Product-1</td>
                                            <td> <input type="number" name="quantity" min={0} className="quantity" /> </td>
                                            <td>Amount</td>
                                            <td><button type="button" className="btn btn-secondary">Delete</button></td>
                                        </tr>

                                    </tbody>
                                </table>

                                <div className="row">
                                    <div className="col-sm-6"></div>
                                    <div className="col-sm-5 ">
                                        <p className="mt-5 text-center">Subtotal:</p>
                                        <p className="mt-1 text-center">Shipping:</p>
                                        <hr />
                                        {/* <p className="mt-1 text-center"> <b>Total:</b> </p> */}
                                    </div>
                                    <div className="row bottom-row">
                                        {/* <div className="col-1 bottomcol"></div> */}
                                        <div className="col-4 bottomcol">
                                            <button type="button" className="btn btn-secondary">Continue Shopping</button>
                                        </div>
                                        <div className="col-4 bottomcol"></div>
                                        <div className="col-3 bottomcol">
                                            <p className="text-start mr-5"><b>Total:</b></p>
                                        </div>
                                        <div className="col-1 bottomcol"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* billing     */}
                    <div className="col-sm-4 acol">
                        <div className="row">
                            <div className="col-sm-1 "></div>
                            <div className="col-sm-10 billingcol">
                                <h5 className="text-start mt-2 mr-1">Payment Info</h5>
                                <div className="row">
                                    <div className="col-sm-8 ">
                                        <h5 className="text-start mt-3">Mode of Payment</h5>
                                        <div>
                                            <div className="form-check form-switch mt-4">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                                                    <label className="form-check-label text-start" >Credit Card</label>
                                            </div>
                                            <div className="form-check form-switch mt-4">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                                                    <label className="form-check-label text-start" >Cash on Delivery</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout