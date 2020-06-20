import React from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList,
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Solidarity Bond" scroll>
          <Navigation>
            <Link to="/aboutus">A propos de nous</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/connexion">Connexion</Link>
          </Navigation>
        </Header>
        <Drawer className="sheader-color" title="Solidatrity Bond">
          <Navigation>
            <Link to="/profile">Profile</Link>
            <a href="https://www.makery.info/labs-map/">Map</a>
            <Link to="/tchat">Messagerie</Link>
            <Link to="/">Link</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
          <Footer className="footer-color" size="mini">
            <FooterSection type="left" logo="Title">
              <FooterLinkList>
                <a href="/">Help</a>
                <a href="/">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
