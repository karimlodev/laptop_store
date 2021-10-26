import React from "react";

export function Product(props) {
    const data = props.data;

    return <div class="card" >
        <img src={data.pic} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
}