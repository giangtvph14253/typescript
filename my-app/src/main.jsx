import React from 'react'
import ReactDOM from 'react-dom'

const myName = "Tran Van Giang";
const myAge = 20;
const myStatus = true;

const showInfo = (porps) => {
  console.log(porps); //{name: "Tuan"}
  return <p>Thong tin user {porps.name}</p>
}

const ShowInfo = (porps) => {
  console.log(props); //{name: "Tuan"}
  return <p>Thong tin user {porps.name}</p>
}

ReactDOM.render(<div>
  <h1>Hello {myName}</h1>
  <p>{myAge}</p>
  <p>{myStatus ? "Dang hoc" : "Da nghi"}</p>
  {showInfo({
    name: "Tuan",
    age: 20
  })}
  <ShowInfo name="Tuan" />
</div>, document.querySelector('#root'))

