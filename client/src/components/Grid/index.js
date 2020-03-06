import React from "react";

// THIS IS A CONTAINER THAT SPANS THE WIDTH OF THE VIEWPORT //
export function Container({ children }) {
  return <div className="container-fluid">{children}</div>;
}

// THIS IS A BASIC ROW CALLOUT //
export function Row({ classInfo, children }) {
  if (classInfo === undefined) {
    return (
      <div className={`row`}>
        {children}
      </div>
    );
  }
  else {
    return (
      <div className={`row${classInfo}`}>
        {children}
      </div>
    );
  }
};

// THIS IS BASIC COLUMN TO BE INSERTED INTO THE ROWS //
export function Col({ classInfo, children }) {
  if (classInfo === undefined) {
    return (
      <div className={`col`}>
        {children}
      </div>
    );
  }
  else {
    return (
      <div className={`col${classInfo}`}>
        {children}
      </div>
    );
  }
};
