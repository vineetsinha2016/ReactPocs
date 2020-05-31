import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import SG from './img/IMG_5573.png';
import SP from './img/GOD.png';
import SV from './img/Govinda.png';
import SH from './img/IMG_2146.png';
import N from './9.jpg';

import './App.css';
import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {
  const contacts = [{"avatar":require('./img/IMG_5573.png'),"name":"Shree Ganesh","email":"ShreeGanesh@GOD.com","age":"N/A"},
  {"avatar":require('./img/GOD.png'),"name":"ShivJiParvatiJi","email":"ShivJiParvatiJi@GOD.com","age":"N/A"},
  {"avatar":require('./img/Govinda.png'),"name":"Shree Hari Vishnu","email":"ShreeHariVishnu@GOD.com","age":"N/A"},
  {"avatar":require('./img/IMG_2146.png'),"name":"Shree Hanuman","email":"JaiShreeHanuman@GOD.com","age":"N/A"}];
  contacts.values(ct => {
    console.log(ct);
  });
  // fetch("https://randomuser.me/api/?results=4")
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  //   setContacts(data.results);
  // });

  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=4")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setContacts(data.results);
  //     });
  // }, []);
  // const [contacts, setContacts] = useState([]);
  const message = "Om Namah Shivay";
  const handleAlert = () => {
    alert("Jai Bhole Nath!")
  }
    return (
    //   <div >
    //     <h2>Shree Ganeshay Namah</h2>
    // <h1 onClick ={handleAlert}>{message}</h1>
    //   </div>
    <> 
    {/* {contacts.map(contact => (
      <ContactCard
        avatar={contact.picture.large}
        name={contact.name.first + " " + contact.name.last}
        email={contact.email}
        age={contact.dob.age}
      />
    ))} */}
    {
    contacts.map(contact => (
      <ContactCard 
      avatar={contact.avatar}
      name={contact.name}
      email={contact.email}
      age={contact.age}
      />
    ))
    }
    {
      contacts.forEach(element => {
        console.log(element)
      })
    /* <ContactCard 
    avatar="https://via.placehoder.com/1"
    name="Shree Ganesh"
    email="ShreeGanesh@GOD.com"
    age="N/A"
    /> */}
    {/* <ContactCard 
    avatar="http://via.placehoder.com"
    name="ShivJiParvatiJi"
    email="ShivJiParvatiJi@GOD.com"
    age="N/A"/>
    <ContactCard 
    avatar="http://via.placehoder.com"
    name="Shree Hari Vishnu"
    email="ShreeHariVishnu@GOD.com"
    age="N/A"/> */}
    </>
    );
};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
    <img src={props.avatar} alt="profile" width="100px" height="100px" />
    <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={()=> setShowAge(!showAge)}>TG</button>
        {/*same thing as below statement--> {showAge === true ? <p> Age NA}</p> : null}   width="60px" height="100px"*/
        showAge && <p> Age : {props.age}</p>}
      </div>
    </div>
  );
};

export default App;
