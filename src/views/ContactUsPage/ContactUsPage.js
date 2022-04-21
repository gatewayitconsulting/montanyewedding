/*eslint-disable*/
import React from "react";
import { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Switch } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";

// plugins
import { useForm } from "react-hook-form";

// core components
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

// images
import backgroundImage from "../../assets/img/rsvp.jpeg";

// styles
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.addEventListener('load', (event) => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    });
  });
  const classes = useStyles();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(`Submitting RSVP with data: ${JSON.stringify(data)}`);
    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://jmdesignsioapi.herokuapp.com' : 'http://localhost:5000';
    fetch(`${baseUrl}/test/rsvps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(`Sucessfully sent RSVP: ${JSON.stringify(res)}`);
        reset();
        window.location.href = '/rsvp-success';
      })
      .catch(err => {
        console.log(`Error submitting RSVP: ${JSON.stringify(err)}`);
        reset();
        window.location.href = '/rsvp-error';
      });
  };

  const intialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    diet: "",
    songRequest: "",
    notes: "",
    guestFirstName: "",
    guestLastName: ""
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Header
        brand="Montanye Wedding"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="dark"
      />
      <Parallax image={backgroundImage} filter="dark">
        <div className={classes.container}>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title + " " + classes.customTitle}>
              RSVP
            </h2>
            <p className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
            >
              We are so excited to have you be a part of our special day! Please fill out this form to let us know you are coming.
            </p>
            <GridContainer>
              <GridItem xs={12}>
                <Card className={classes.card1}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <TextField
                            defaultValue={intialValues.firstName}
                            id="first"
                            label="First Name"
                            type="text"
                            {...register("firstName", { required: true })}
                            style={{ width: '100%' }}
                          />
                          {errors.firstName && <span style={{ color: 'red' }}>This field is required</span>}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6} className={classes.last}>
                          <TextField
                            defaultValue={intialValues.lastName}
                            id="last"
                            label="Last Name"
                            type="text"
                            {...register("lastName", { required: true })}
                            style={{ width: '100%' }}
                          />
                          {errors.lastName && <p style={{ color: 'red' }}>This field is required</p>}
                        </GridItem>
                        <GridItem xs={12} style={{ marginTop: '2em' }}>
                          <TextField
                            defaultValue={intialValues.email}
                            id="email-address"
                            label="Email Address"
                            type="email"
                            {...register("email", { required: true })}
                            style={{ width: '100%' }}
                          />
                          {errors.email && <p style={{ color: 'red' }}>This field is required</p>}
                        </GridItem>
                        <GridItem xs={12} style={{ marginTop: '2em' }}>
                          <TextField
                            defaultValue={intialValues.phone}
                            id="phone-number"
                            label="Phone Number - (###-###-####)"
                            type="phone"
                            {...register("phone", {
                              required: true,
                              pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                message: '',
                              },
                            })}
                            style={{ width: '100%' }}
                          />
                          {errors.phone && <p style={{ color: 'red' }}>Please enter a correct phone number</p>}
                        </GridItem>
                        <GridItem xs={12} style={{ marginTop: '2em' }}>
                          <Typography style={{ display: 'inline' }}>Guest Coming?</Typography>
                          <GridItem xs={12}>
                            <div id="guestInformation" className={classes.guestComing}>
                              <GridContainer>
                                <GridItem xs={12} sm={6} className={classes.guestFirst}>
                                  <TextField
                                    defaultValue={intialValues.guestFirstName}
                                    id="guestFirst"
                                    label="Guest First Name"
                                    type="text"
                                    {...register("guestFirstName")}
                                    style={{ width: '100%' }}
                                  />
                                </GridItem>
                                <GridItem xs={12} sm={6} className={classes.guestLast}>
                                  <TextField
                                    defaultValue={intialValues.guestLastName}
                                    id="guestLast"
                                    label="Guest Last Name"
                                    type="text"
                                    {...register("guestLastName")}
                                    style={{ width: '100%' }}
                                  />
                                </GridItem>
                              </GridContainer>
                            </div>
                          </GridItem>
                        </GridItem>
                        <GridItem xs={12} style={{ marginTop: '1em' }}>
                          <TextField
                            defaultValue={intialValues.diet}
                            id="diet"
                            label="Food allergies or alternative diets?"
                            type="text"
                            {...register("diet")}
                            style={{ width: '100%' }}
                          />
                        </GridItem>
                        <GridItem xs={12} style={{ marginTop: '1em' }}>
                          <TextField
                            defaultValue={intialValues.songRequest}
                            id="songRequest"
                            label="Dance floor song requests"
                            type="text"
                            {...register("songRequest")}
                            style={{ width: '100%' }}
                          />
                        </GridItem>
                        <GridItem xs={12} style={{ marginTop: '2em' }}>
                          <TextField
                            defaultValue={intialValues.notes}
                            id="notes"
                            label="Anything else you'd like to tell us?"
                            type="text"
                            {...register("notes")}
                            style={{ width: '100%' }}
                          />
                        </GridItem>
                        {/* <GridItem xs={12} style={{ marginTop: '2em' }}>
                          <Switch
                            style={{ display: 'inline' }}
                            color="secondary"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                          />
                        </GridItem> */}
                      </GridContainer>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween} style={{ marginTop: '.5em' }}>
                      <input type="submit" className={classes.buttonInput + `${isChecked ? "active" : ""}`} />
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        theme="dark"
        content={
          <div>
            <div className="footer-brand">
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://gatewayitconsulting.com"
                target="_blank"
                className={classes.aClasses}
              >
                Gateway IT Consulting
              </a>{" "}
              All Rights Reserved.
            </div>
            <div className="footer-privacy-policy">
              <Link to="/privacy-policy" title="To privacy policy page">
                Privacy Policy
              </Link>
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} md={6}>
            <h5>About Us</h5>
            <p>
              This website has been created by Lauren and John. Lauren used her
              design eye and John used his skills in web development to create
              this website.{" "}
            </p>
            <p>
              <b>Technology used:</b> Creative Tim Material Design theme customized
              using React, HTML5, SASS, and some 3rd parties to handle the
              heavy lifting in the backend.{" "}
            </p>
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  );
}
