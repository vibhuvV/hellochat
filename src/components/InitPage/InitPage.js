import React, { Fragment } from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import MidSection from "./MidSection/MidSection";
import MidCard from "./MidCard/MidCard";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import "./styles.css";

class InitPage extends React.Component {
  render() {
    const { location } = this.props;
    if (location.pathname === "/")
      return (
        <Fragment>
          <NavBar />
          <Banner />
          <MidSection>
            <MidCard
              title={[
                <EnhancedEncryptionIcon></EnhancedEncryptionIcon>,
                " Secure"
              ]}
            >
              You can send message to your friend anytime. You can send message
              to your friend anytime. You can send message to your friend
              anytime.
            </MidCard>
            <MidCard
              title={[
                <EnhancedEncryptionIcon></EnhancedEncryptionIcon>,
                " Secure"
              ]}
            >
              You can send message to your friend anytime. You can send message
              to your friend anytime. You can send message to your friend
              anytime.
            </MidCard>
            <MidCard
              title={[
                <EnhancedEncryptionIcon></EnhancedEncryptionIcon>,
                " Secure"
              ]}
            >
              You can send message to your friend anytime. You can send message
              to your friend anytime. You can send message to your friend
              anytime.
            </MidCard>
            <MidCard
              title={[
                <EnhancedEncryptionIcon></EnhancedEncryptionIcon>,
                " Secure"
              ]}
            >
              You can send message to your friend anytime. You can send message
              to your friend anytime. You can send message to your friend
              anytime.
            </MidCard>
          </MidSection>
          <footer>&copy; Vaibhav Verma 2020</footer>
        </Fragment>
      );
    else return <span></span>;
  }
}

export default InitPage;
