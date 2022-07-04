import React from "react";

function Cards(props) {
  return (
    <>
      <div
        className="card mt-4 ml-5 cardstyle"
        style={{ width: "12rem", height: "fit-content" }}
      >
        <img src={props.values.add} className="card-img-top cardimg" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.values.title}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <div class="">
            <a href="#" className="btn btn-primary ">
              Details
            </a>
          </div>
          <div class="">
            <a
              href="#"
              className="btn btn-primary mt-2 d-inlineblock "
              onClick={()=>{props.sendadd(props.id,props.values.title)}}
            >
              Add
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
