/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";

const useStyles = makeStyles(styles, pricingStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.addEventListener('load', (event) => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    });
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="dark"
        brand="Montanye Wedding"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
      />
      <div className={classes.container} style={{ marginTop: "5em", marginBottom: "2em" }}>
        <GridContainer>
          <GridItem
            xs={12}
            className={
              classes.mlAuto + " " + classes.mrAuto
            }
          >
            <h1>
              Cookie/Privacy Policy
            </h1>
            <h2>
              Montanye Wedding Privacy Policy
            </h2>
            <p className={classes.description}>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from
              <a href="https://montanyewedding.com/" title="To Montanye Wedding website."> https://montanyewedding.com/</a> (the "Site").
            </p>
            <p>
              <b>PERSONAL INFORMATION WE COLLECT</b>
            </p>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser,
              IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages
              or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected
              information as "Device Information."
            </p>
            <p>
              <b>We collect Device Information using the following technologies:</b>
            </p>
            <ul>
              <li>
                "Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies,
                and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener" title="To All About Cookies website."> http://www.allaboutcookies.org</a>.
              </li>
              <li>
                "Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
              </li>
              <li>
                "Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.
              </li>
            </ul>
            <p>
              Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address,
              shipping address, payment information (including credit card numbers, email address, and phone number.  We refer to this information as "Order Information."
            </p>
            <p>
              When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information.
            </p>
            <p>
              <b>HOW DO WE USE YOUR PERSONAL INFORMATION?</b>
            </p>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping,
              and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to: Communicate with you; Screen our orders for potential risk or fraud;
              and When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
            </p>
            <p>
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our
              Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>
            <p>
              <b>SHARING YOUR PERSONAL INFORMATION</b>
            </p>
            <p>
              We share your Personal Information with third parties to help us use your Personal Information, as described above. We use Google Analytics to help us understand how our customers
              use the Site--you can read more about how Google uses your Personal Information here:
              <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener" title="To Google Privacy Policy."> https://www.google.com/intl/en/policies/privacy/</a>.
              You can also opt-out of Google Analytics here:
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" title="Opt out of Google Analytics."> https://tools.google.com/dlpage/gaoptout</a>.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for
              information we receive, or to otherwise protect our rights.
            </p>
            <p>
              <b>BEHAVIOURAL ADVERTISING</b>
            </p>
            <p>
              As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.
              For more information about how targeted advertising works, you can visit the Network Advertising Initiative's ("NAI") educational page at
              <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank" rel="noopener"
                title="To the Network Advertising Initiative's educational page.">
                &nbsp;http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
              </a>.
            </p>
            <p>
              You can opt out of targeted advertising by:
            </p>
            <ul>
              <li>
                FACEBOOK -
                <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener" title="Opt out of targeted advertising at Facebook.">
                  &nbsp;https://www.facebook.com/settings/?tab=ads
                </a>
              </li>
              <li>
                GOOGLE -
                <a href="https://www.google.com/settings/ads/anonymous" target="_blank" rel="noopener" title="Opt out of targeted advertising at Google.">
                  &nbsp;https://www.google.com/settings/ads/anonymous
                </a>
              </li>
              <li>
                BING -
                <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank" rel="noopener" title="Opt out of targeted advertising at Bing.">
                  &nbsp;https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
              </li>
            </ul>
            <p>
              Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal at:
              <a href="http://optout.aboutads.info/" target="_blank" rel="noopener" title="To the Digital Advertising Alliance's opt-out portal."> http://optout.aboutads.info/</a>.
            </p>
            <p>
              <b>DO NOT TRACK</b>
            </p>
            <p>
              Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.
            </p>
            <p>
              <b>YOUR RIGHTS</b>
            </p>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected,
              updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>
            <p>
              Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make
              an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside
              of Europe, including to Canada and the United States.
            </p>
            <p>
              <b>CHANGES</b>
            </p>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>
            <p>
              <b>CONTACT US</b>
            </p>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at
              <a href="mailto:gatewayitconsulting@outlook.com" title="Email Gateway IT Consulting"> gatewayitconsulting@outlook.com</a> or by mail using the details provided below:
              <br />
              719 Treeside Ct, Apt H, Chesterfield, MO, 63017, United States
            </p>
          </GridItem>
        </GridContainer>
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
                rel="noopener"
                className={classes.aClasses}
              >
                Montanye Wedding
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
