import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Alerts() {
  // Setting our component's initial state
  const [alerts, setAlerts] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all alerts and store them with setAlerts
  useEffect(() => {
    loadAlerts()
  }, [])

  // Loads all alerts and sets them to alerts
  function loadAlerts() {
    API.getAlerts()
      .then(res => 
        setAlerts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a alert from the database with a given id, then reloads alerts from the db
  function deleteAlert(id) {
    API.deleteAlert(id)
      .then(res => loadAlerts())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveAlert({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadAlerts())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Alert
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
            {alerts.length ? (
              <List>
                {alerts.map(alert => (
                  <ListItem key={alert._id}>
                    <Link to={"/alerts/" + alert._id}>
                      <strong>
                        {alert.title} by {alert.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteAlert(alert._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Alerts;
