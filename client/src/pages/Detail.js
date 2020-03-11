import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Detail(props) {
  const [alert, setAlert] = useState({})

  const { id } = useParams()
  useEffect(() => {
    API.getAlert(id)
      .then(res => setAlert(res.data))
      .catch(err => console.log(err));
  }, [])

  const h2Style = {
    whiteSpace: 'normal'
  };

  return (

    <div className="d-flex flex-column justify-content-center align-items-center">

      <div className="display-3 m-3">
        {alert.category}
      </div>

      <div className="display-4 m-2">
        on the {alert.line} line
      </div>

      <div className="h2 w-75 mt-5 mb-5" style={h2Style}>
        {alert.description}
      </div>
    
      <Link to="/">← Back</Link>

    </div>
  );
}


export default Detail;
