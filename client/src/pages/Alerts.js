import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { ColorInput, CategoryInput, Input, TextArea, FormBtn } from "../components/Form";
import "../assets/alerts.css"

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
      let filter = alerts.filter(function(res) {
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
    <Container>
      <Row classInfo=" row">
        <select id="lineFilter" onChange={() => filterLine(document.getElementById("lineFilter").value)}>
          <option id="all" value="">All Lines</option>
          <option id="Red" data-val="Red">Red</option>
          <option id="Blue" data-val="Blue">Blue</option>
          <option id="Brn" data-val="Brn">Brown</option>
          <option id="G" data-val="G">Green</option>
          <option id="Org" data-val="Org">Orange</option>
          <option id="P" data-val="P">Purple</option>
          <option id="Pexp" data-val="Pexp">Purple Express</option>
          <option id="Pink" data-val="Pink">Pink</option>
          <option id="Y" data-val="Y">Yellow</option>
        </select>
        <Col classInfo=" col-md-8">
          {alerts.length ? (
            <List>
              {filteredAlerts.map(alert => (
                <ListItem key={alert._id}>

                  <Row >
                    <Col classInfo="-md-2">
                      <Link to={"/alerts/" + alert._id}>
                        {/* Line Color */}
                        {alert.line}
                      </Link>
                    </Col>
                    <Col classInfo="-md-6">
                        <Row >
                          <Link to={"/alerts/" + alert._id}>
                            {/* Details */}
                            {alert.description}
                          </Link>
                        </Row>
                      <Row >
                        <Col classInfo="-md-5">
                          {/* Upvotes */}
                          {`Upvotes: ${alert.votes}`}
                        </Col>
                        <Col classInfo="-md-5">
                          {/* Clear Marks */}
                          {`${alert.votes} Users marked cleared`}
                        </Col>
                        <Col classInfo="-md-2">
                          {/* Cleared Button */}
                          ClearButton
                        </Col>
                      </Row>
                    </Col>
                    <Col classInfo="-md-3">
                      <Row >
                        ThumbUpButton
                        {/* Thumb Up */}
                      </Row>
                      <Row >
                        ThumbDownButton
                        {/* Thumb Down */}
                      </Row>
                    </Col>
                    {/* <Col classInfo="-md-1">
                      <DeleteBtn onClick={() => deleteAlert(alert._id)} />
                    </Col> */}
                  </Row>
                    {/* <strong>
                      {alert.line} - {alert.category}
                    </strong> */}
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>Nothing currently happening.</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Alerts;
