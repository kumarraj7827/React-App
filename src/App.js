// import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import Imagecomp from "./Imagecomp";
import data from "./data.json";
import Image1 from "./Image1";

function App() {
  return (
        <div className="App">
      <Navbar title="Home" />
      <Navbar title="Posts" />
      <Navbar title="Components" />
      <Navbar1 title="mil&oslash;" />
      <img src = {"./1.jpg"} alt = "1" />
      {/* {
      data.map(obj =>{
      return(
        <Imagecomp id = {obj.id} 
         publishdate = {obj.publishDate}
         title = {obj.title} 
         imageUrl ={obj.imageUrl}
         description = {obj.description}
         />
      );
      }
      )
      } */}
      {/* <Imagecomp title = "Hello"/> */}
      <hr />
      <Image1 title = "Hello" 
      subtitle = "Hello World"
      img src = {"./1.jpg"} />
          </div>
    

  );
}

export default App;
