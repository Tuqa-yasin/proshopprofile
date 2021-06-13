import logo from './logo.svg';
import './App.css';
import {Button, ContentWrapper, Element, List, MainContainer,Typography} from "./App.Styles"

function App() {
  return (
    <MainContainer>
      <ContentWrapper>
        <Element>
          <List>
          <li>
            <img src="../public/logo192.png"></img>
            <h1> Amy Mayer </h1>
          </li>
          <li> My Orders</li>
          <li> Wishlist </li>
          <li> Notification </li>
          <li>Settings</li>
          <li>Logout</li>
          </List>
        </Element>
        
        <Element>
          <List>
            <li>
              <h1> My Profile </h1>
            </li>
            <li> 
              <p color={"#444"}>FirstName</p>
              <p color={"#000"}>Amy</p>
            </li>
            <li> 
              <p color={"#444"}>LastName</p>
              <p color={"#000"}>Mayer</p>
            </li>
            <li>
              <p color={"#444"}>Email</p>
              <p color={"#000"}>amymay@gmail.com</p>
            </li>
            <li>
              <p color={"#444"}>Birthday</p>
              <p color={"#000"}>12/4/1991</p>
            </li>
            <Button>Change Password</Button>
            </List>
            <RightSide>
              <img src=""></img>
              <Button>Upload New Photo</Button>
            </RightSide>
        </Element>
      </ContentWrapper>
    </MainContainer>
  );
}

export default App;
