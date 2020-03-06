import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { VoteUp, VoteDn, Clear } from "../components/Thumbs"

import { List, ListItem } from "../components/List";
// import { ColorInput, CategoryInput, Input, TextArea, FormBtn } from "../components/Form";

function Alerts() {

  // Setting our component's initial state
  const [alerts, setAlerts] = useState([])
  const [filteredAlerts, setFilteredAlerts] = useState([])

  // Load all alerts and store them with setAlerts
  useEffect(() => {
    loadAlerts()
  }, [])

  // Loads all alerts and sets them to alerts
  function loadAlerts() {
    API.getAlerts()
      .then(res => {
        setAlerts(res.data);
        setFilteredAlerts(res.data);
      }
      )
      .catch(err => console.log(err));
  };

  function filterLine(color) {
    if (color === "") {
      return setFilteredAlerts(alerts);

    } else {
      let filter = alerts.filter(function (res) {
        return res.line === color;
      });
      console.log(filter)
      setFilteredAlerts(filter);
    };
  };

  // // Deletes a alert from the database with a given id, then reloads alerts from the db
  // function deleteAlert(id) {
  //   API.deleteAlert(id)
  //     .then(res => loadAlerts())
  //     .catch(err => console.log(err));
  // }

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  // function handleFormSubmit(event) {
  //   // console.log(formObject.line.value)
  //   console.log("form click works!!");
  //   console.log(line);
  //   console.log(category);
  //   console.log(desc);

  //   event.preventDefault();
  //   //if (formObject.color && formObject.category) { i took this out to prevent requiring data -DDD
  //   API.saveAlert({
  //     line: line,
  //     category: category,
  //     description: desc,
  //     votes: 0,
  //     date: 'hi'
  //   })
  //     .then(res => loadAlerts())
  //     .catch(err => console.log(err));
  //   //}
  // };


  return (

    <div className="d-flex flex-column justify-items-start m-5" >

      <h3 className="text-right ml-5 mr-5 text-muted"><i>Filter by Line</i></h3>

      <select className="mr-5 ml-5 mb-5" id="lineFilter" onChange={() => filterLine(document.getElementById("lineFilter").value)} >
        <option className="lead" id="all" value="">All Lines</option>
        <option className="lead" id="Red" data-val="Red">Red</option>
        <option className="lead" id="Blue" data-val="Blue">Blue</option>
        <option className="lead" id="Brn" data-val="Brn">Brown</option>
        <option className="lead" id="G" data-val="G">Green</option>
        <option className="lead" id="Org" data-val="Org">Orange</option>
        <option className="lead" id="P" data-val="P">Purple</option>
        <option className="lead" id="Pexp" data-val="Pexp">Purple Express</option>
        <option className="lead" id="Pink" data-val="Pink">Pink</option>
        <option className="lead" id="Y" data-val="Y">Yellow</option>
      </select>

      <h1 className="display-4 m-5 mb-5">Check out what's going on...</h1>

      <Container className="" >
        <Row  >
          {alerts.length ? (
            <List className="" >

              {filteredAlerts.map(alert => (

                <ListItem key={alert._id}>
                  <Row className="d-flex justify-content-center">

                    <div className={alert.line}>{'\u00A0 \u00A0 \u00A0'}</div>

                    <Link className="ml-3" to={"/alerts/" + alert._id}>
                      {/* Details */}
                      {alert.description}
                    </Link>
                    <div className="">
                      {/* Upvotes */}
                      {`Score: ${alert.votes}`}
                    </div>
                    <div className="">
                      {/* Clear Marks */}
                      <img alt="" src={require('./../assets/images/ctanonImages/exp.png')} ></img>
                      {`x${alert.cleared}`}
                    </div>

                    <div className="">
                      {/* Clear Marks */}
                      <img alt="" src={require('./../assets/images/ctanonImages/pst.png')} ></img>
                      {`${alert.date
                        .replace('T', ' @')
                        .replace('Z', '')
                        }`}
                    </div>

                    <Clear />
                    <VoteUp />
                    <VoteDn />

                    {/* delete col, maybe for later */}
                    {/* 
                          <Col classInfo="">
                            <DeleteBtn onClick={() => deleteAlert(alert._id)} />
                          </Col> 
                          
                      */}
                  </Row>
                </ListItem>

              ))}
            </List>
          )
            :
            (
              <h3>Nothing currently happening.</h3>
            )}
        </Row>
      </Container>
    </div>
  );
}


export default Alerts;
