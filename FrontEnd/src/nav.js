import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap'

export default function App() {
  return (
    <>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#/register">
            Register
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/">
            LonginScreen
          </a> 
          </li>
  
  <li class="nav-item">
      <a class="nav-link" href="#/UploadForm">UploadForm</a>  
      </li>

      <li class="nav-item">
      <a class="nav-link" href="#/UploadFormList">UploadFormList</a>  
      </li>
      </ul>
    </>
  );
}
