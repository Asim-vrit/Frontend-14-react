import React from "react";

function UserCard(props) {
  return (
    <div className="card">
      <div>name:{props.name?.firstname + props.name?.lastname}</div>
      <div>Address:{props.address?.city}</div>
      ...
    </div>
  );
}

export default UserCard;
