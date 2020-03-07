
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Axios from "axios";
import { List, ListItem } from "../components/List";
import { ColorInput, CategoryInput, Input, TextArea, FormBtn, FilterTrains } from "../components/Form";

let ctaRoutes = [];

function ctaAlerts() {
  // Setting our component's initial state
  const [ctaAlerts, setCtaAlerts] = useState([])


  // Load all alerts and store them with setAlerts
  useEffect(() => {
    loadCtaAlerts()
  }, [])


  // Loads all alerts and sets them to alerts
  function loadCtaAlerts() {
    Axios.get('http://www.transitchicago.com/api/1.0/routes.aspx?outputType=JSON')
    .then(res => {
       // console.log(res.data.CTARoutes.RouteInfo)
        let ctaData = res.data.CTARoutes.RouteInfo.slice([0], [9]);

        ctaRoutes = ctaData.map(item => {
          return {
            Route: item.Route,
            Status: item.RouteStatus  
          }
          });
        console.log(ctaRoutes);
        setCtaAlerts(ctaRoutes);
    })
};

   
    return (
      <Container>
        <Row classInfo="row">
          <Col classInfo="col-md-6">
            <h1 className="">This is what's happening in Chicago</h1>
            <div>
              {ctaRoutes.map(ctaRoute => (
                <h2>{ctaRoute.Route} - {ctaRoute.Status}</h2>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      )
    }
  

export default ctaAlerts;