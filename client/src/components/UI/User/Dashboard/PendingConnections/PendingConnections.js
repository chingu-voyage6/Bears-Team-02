import React from "react";

const PendingConnections = ({ pendingConnections, userId }) => {
  return pendingConnections.map((connection, i) => {
    return (
      // TODO - Temp key fix, add different unique key id
      <div key={i}>
        <p>
          Name: {connection.requestedUser.firstName}{" "}
          {connection.requestedUser.lastName}
        </p>
        <button>
          {connection.requestingUser._id === userId ? "Pending" : "Accept"}
        </button>
      </div>
    );
  });
};

export default PendingConnections;
