import React from "react";

const Item = (props) => {
    console.log(props)
    return (
        <div>{props.data.name}</div>
    )
}

export default Item