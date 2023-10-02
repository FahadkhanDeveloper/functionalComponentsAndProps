import logo from './logo.svg';
import './App.css';
// import Cart from './Cart'
import Counter from './Counter'

function App() {
  return (
    <div>
      {/* <Cart 
         image="http://api.randomuser.me/portraits/men/27.jpg"
         name="JOn Doe"
         joined="2032"
         desc = "He is an Ethical hacker based in icp"
         noOfFriends="22"
      />
       
       <Cart 
         image="http://api.randomuser.me/portraits/women/27.jpg"
         name="Lina"
         joined="2022"
         desc = "He is an Ethical hacker Not"
         noOfFriends="202"
      /> */}
      <Counter />

      {/* <p>This is from app js</p>
      <label>Gender</label><br/>
      <label htmlFor="male">Male</label><input type="radio" name="gender" id="male" />
      <label htmlFor="female">Female</label> <input type="radio" name="gender" id="female" /> */}
    </div>
  );
}

export default App;
