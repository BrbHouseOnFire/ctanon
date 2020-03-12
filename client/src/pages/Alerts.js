import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import { VoteUp, VoteDn, Clear } from "../components/Thumbs"
import { List, ListItem } from "../components/List";
import "../assets/css/loader.css";
import "../assets/css/sizing.css";


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
        let all = res.data;
        let less = [];
        for (let i = 0; i < all.length; i++) {
          if (all[i].hidden === false && all[i].cleared < 15) {
            less.push(all[i]);
          }
        }
        setAlerts(less);
        setFilteredAlerts(less);
      }).catch(err => console.log(err));
  };

  function filterLine(color, sortFunction) {
    // depracated function. Updated in new function:
    filterAndSort(color, sortFunction);
  };

  function filterAndSort(color, sortFunction) {
    if (color === "") {
      // no color selection: sort all alerts
      if (sortFunction === "Highest Rated") {
        alerts.sort(function (a, b) {
          return parseFloat(b.votes) - parseFloat(a.votes);
        });
        let hiRating = [...alerts];
        setFilteredAlerts(hiRating);
      } 
      else if (sortFunction === "Most Recent") {
        alerts.sort(function (a, b) {
          return parseFloat(a.dateTime) - parseFloat(b.dateTime);
        })
        let newDate = [...alerts]
        setFilteredAlerts(newDate);
      }
    }


    else {
      // filter on color, then sort
      let filter = alerts.filter(function (res) {
        return res.line === color;
      });
      if (sortFunction === "Highest Rated") {
        filter.sort(function (a, b) {
          return parseFloat(b.votes) - parseFloat(a.votes);
        });
        let hiRating = [...filter];
        setFilteredAlerts(hiRating);
      } 
      else if (sortFunction === "Most Recent") {
        filter.sort(function (a, b) {
          return parseFloat(a.dateTime) - parseFloat(b.dateTime);
        })
        let newDate = [...filter]
        setFilteredAlerts(newDate);
      }
    };
  }

  function sorting(sortFunction) {
    if (sortFunction === "Highest Rated") {
      filteredAlerts.sort(function (a, b) {
        return parseFloat(b.votes) - parseFloat(a.votes);
      });
      let hiRating = [...filteredAlerts];
      setFilteredAlerts(hiRating);
    } 
    else if (sortFunction === "Most Recent") {
      filteredAlerts.sort(function (a, b) {
        return parseFloat(b.dateTime) - parseFloat(a.dateTime);
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
    for (let i = 0; i < filteredAlerts.length; i++) {
      if (value._id === filteredAlerts[i]._id) {
        if (filteredAlerts[i].hidden === false) {
          filteredAlerts[i].cleared += 1;
          filteredAlerts[i].hidden = true;
          let change = [...filteredAlerts];

          setFilteredAlerts(change);

          API.getAlert(value._id)
            .then(res => {
              let up = res.data.cleared + 1;
              API.updateAlert(res.data._id, { cleared: up })
                .then(res => {

                })
            });
        };
      };
    };
  }

  // // Deletes a alert from the database with a given id, then reloads alerts from the db
  // function deleteAlert(id) {
  //   API.deleteAlert(id)
  //     .then(res => loadAlerts())
  //     .catch(err => console.log(err));
  // }

  return (
    <>
      {alerts.length ? (
        <>
          <div className="d-flex flex-column align-items-center m-auto w">
            <h1 className="display-4 sizeH">Check out what's going on...</h1>
            <div className="m-auto d-flex">
              <div className="m-1 d-flex flex-column">
                <h3 className="text-muted sizeFS"><i>Filter by Line</i></h3>
                <select className="h-auto m-auto sizeB" id="lineFilter" onChange={() => filterLine(document.getElementById("lineFilter").value, document.getElementById("sort").value)}>
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
              <div className=" m-1 d-flex flex-column">
                <h3 className=" text-muted sizeFS"><i>Order By</i></h3>
                <select className=" m-5 h-auto m-auto sizeB" id="sort" onChange={() => sorting(document.getElementById("sort").value)}>
                  <option className=" lead" data-val="mostRecent">Most Recent</option>
                  <option className=" lead" data-val="hiRated">Highest Rated</option>
                </select>
              </div>
            </div>
            <div className="mnw-100 cardContainer">
              <List>
                {filteredAlerts.map(alert => (
                  <ListItem className="" key={alert._id}>
                    <div className=" flex align-items-center m-1 indCard">
                      <div className="holder align-items-center">
                        <Link to={"/alerts/" + alert._id} title="See Full Alert">
                          <div className={alert.line + " p-3 rounded"}>{'\u00A0 \u00A0 \u00A0'}</div>
                        </Link>
                        <div className=" flex column wsNormal pl-1 align-items-start ">
                          <Link to={"/alerts/" + alert._id} className=" p-1 descSize" title="See Full Alert">
                            {alert.description}
                          </Link>
                          <div className=" flex align-items-center justify-items-center pl-2 descTextSize cardStats">
                            <div className="cardStat">
                              {/* Score */}
                              {`Score: ${alert.votes}`}
                            </div>
                            <div className="descTextSize cardStat">
                              {/* Clears */}
                              {/* <img alt="" src={require('./../assets/images/ctanonImages/stale.png')} title="# of Users Who Marked This Alert as Stale" /> */}
                              <Clear onClick={() => clear(alert)} />
                              {`x${alert.cleared}`}
                            </div>
                            <div className="cardStat">
                              {/* post time */}
                              <img alt="" src={require('./../assets/images/ctanonImages/pst.png')} ></img>
                              {moment(alert.dateTime, "YYYYMMDDHHmmss").fromNow()}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" ml-auto flex column justify-content-center align-items-center">
                        <VoteUp onClick={() => upvote(alert)} />
                        <VoteDn onClick={() => downvote(alert)} />
                      </div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex flex-column align-items-center m-auto w w-75">
            <div className="mnw-90">
              <div className=" loader">
                <span className=" cube"></span>
                {/* <span className="cube"></span> */}
                {/* <span className="cube"></span> */}
                {/* <span className="cube"></span> */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// {/* delete col, maybe for later */ }
// {/* <Col classInfo="">
// <DeleteBtn onClick={() => deleteAlert(alert._id)} />
// </Col> */}

export default Alerts;

