import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { VoteUp, VoteDn, Clear } from "../components/Thumbs"
import { List, ListItem } from "../components/List";


// import { ColorInput, CategoryInput, Input, TextArea, FormBtn } from "../components/Form";

const moment = require("moment");

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
      setFilteredAlerts(filter);
    };
  };

  function sorting(sortFunction) {
    if (sortFunction === "Highest Rated") {

      console.log("high trigger")
      filteredAlerts.sort(function (a, b) {
        return parseFloat(b.votes) - parseFloat(a.votes);
      });
      let hiRating = [...filteredAlerts];
      setFilteredAlerts(hiRating);
      console.log(hiRating)

    } else if (sortFunction === "Most Recent") {
      console.log("recent Trigger")

      filteredAlerts.sort(function (a, b) {
        return parseFloat(a.dateTime) - parseFloat(b.dateTime);
      })
      let newDate = [...filteredAlerts]
      setFilteredAlerts(newDate);
    }

  }


  function upvote(value) {
    for (let i = 0; i < filteredAlerts.length; i++) {
      if (value._id === filteredAlerts[i]._id) {
        if (filteredAlerts[i].voted === false) {
          filteredAlerts[i].votes += 1;
          filteredAlerts[i].voted = true;
          let change = [...filteredAlerts];

          setFilteredAlerts(change);

          API.getAlert(value._id)
            .then(res => {
              let up = res.data.votes + 1;
              API.updateAlert(res.data._id, { votes: up })
                .then(res => {
                })
            });
        }
      };
    };
  };

  function downvote(value) {
    for (let i = 0; i < filteredAlerts.length; i++) {
      if (value._id === filteredAlerts[i]._id) {
        if (filteredAlerts[i].voted === false) {
          filteredAlerts[i].votes -= 1;
          filteredAlerts[i].voted = true;
          let change = [...filteredAlerts];

          setFilteredAlerts(change);

          API.getAlert(value._id)
            .then(res => {
              let down = res.data.votes - 1;
              API.updateAlert(res.data._id, { votes: down })
                .then(res => {

                })
            });
        };
      };
    };


  };

  function clear(value) {
    console.log(`${value} clear`)
  }


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

    <div className="d-flex flex-column align-items-center m-auto w w-75">

      <h1 className="display-4 m-5 mb-5">Check out what's going on...</h1>

      <div className="m-auto d-flex">
        <div className="m-4 d-flex flex-column">
          <h3 className="text-muted"><i>Filter by Line</i></h3>
          <select className="h-auto m-auto display-4" id="lineFilter" onChange={() => filterLine(document.getElementById("lineFilter").value)}>
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
        </div>

        <div className="m-4 d-flex flex-column">
          <h3 className="text-muted"><i>Order By</i></h3>
          <select className="m-5 h-auto m-auto display-4" id="sort" onChange={() => sorting(document.getElementById("sort").value)}>
            <option className="lead" data-val="mostRecent">Most Recent</option>
            <option className="lead" data-val="hiRated">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="w">
        {alerts.length ? (
          <List>

            {filteredAlerts.map(alert => (

              <ListItem className="" key={alert._id}>
                <div className="d-flex justify-content-between align-items-center">

                  <Link to={"/alerts/" + alert._id}>
                    <div className={alert.line+" p-3 rounded"}>{'\u00A0 \u00A0 \u00A0'}</div>
                  </Link>

                  <div className="d-flex flex-column align-items-center ">
                    <Link to={"/alerts/" + alert._id}>
                      {/* Details */}
                      {alert.description}
                    </Link>

                    <div className="d-flex align-items-center justify-items-center">
                      <div >
                        {/* Score */}
                        {`Score: ${alert.votes}`}
                      </div>

                      <div className="ml-4 mr-4">
                        {/* Clears */}
                        <img alt="" src={require('./../assets/images/ctanonImages/exp.png')} />
                        {`x${alert.cleared}`}
                      </div>

                      <div >
                        {/* post time */}
                        <img alt="" src={require('./../assets/images/ctanonImages/pst.png')} ></img>
                        {moment(alert.dateTime, "YYYYMMDDHHmmss").fromNow()}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <Clear onClick={() => clear(alert)} />
                    <VoteUp onClick={() => upvote(alert)} />
                    <VoteDn onClick={() => downvote(alert)} />
                  </div>
                </div>
              </ListItem>

            ))}
          </List>
        )
          :
          (
            <h3>Loading Results... Ein Moment Bitte!</h3>
          )}
      </div>
    </div>
  );
}


export default Alerts;

{/* delete col, maybe for later */ }
{/* <Col classInfo="">
                        <DeleteBtn onClick={() => deleteAlert(alert._id)} />
                      </Col> */}