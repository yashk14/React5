import { useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  const[data,setData]=useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/users').then(response => {
      console.log(response.data.users);

      setData(response.data.users);
     
    });
  },[]);

  var userDetails ="";
  userDetails = data.map((user,index)=>{
    return(
      
      <tr key={index}>
      <td>{user.id}</td>
      <td><img  width={100} height={100} src={user.image} alt={'Profile Pic ${index}'} /></td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.domain}</td>
      <td>{user.ip}</td>
      <td>{user.university}</td>

  </tr>
    )
  });

return(
  <div className="App">
      <div className="App-header ">
          <h2>Dummy Data</h2>
          <div className='table-responsive'>
          <table className='table table-bordered table-striped w-100 '>
              <thead>
                  <tr>
                      <th>Sno</th>
                      <th>Profile Pic</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      <th>E-mail</th>
                      <th>Username</th>
                      <th>Domain</th>
                      <th>IP</th>
                      <th>University</th>
                  </tr>
              </thead>
              <tbody>
                  {userDetails}
              </tbody>
          </table>
          </div>
      </div>
      
      
  </div>
);
}

export default App;
