import './App.css';
import profile_img from './images/profileimg.jpg'
import icon from './images/Social.png'
import text from './images/Footer.png'
import mobile from './images/Mobile.png'
import footmobi from './images/Footer mobile.png'
function App() {
  return (
    <div className="App">
      <img className='profile' src= {profile_img} alt= "profile" />
      <h1>Nna-Edozie Tochukwu Emmanuel</h1>
      <p id='slack'>slack_name- Tochukwu Nna-Edozie</p>
      <ul>
        <li id="btn-zuri">
        <a href="https://twitter.com/edozie_nna">Twitter Link</a>
        </li>
        <li id='books'>
        <a href="“https://training.zuri.team/”">Zuri Team</a>
        </li>
        <li id='books'>
        <a href="https://books.zuri.team">Zuri Books</a>
        </li>
        <li id='book__python'>
        <a href="https://books.zuri.team">Python Books</a>
        </li>
        <li id='pitch'>
        <a href="https://background.zuri.team">Background Check for Coders</a>
        </li>
        <li id='book__design'>
        <a href="https://books.zuri.team/design-rules">Design Books</a>
        </li>
        </ul>

        <div className ='icon'>
        <img className='pic' src={icon} alt="icon" />
        <img className='footmobi' src={footmobi} alt="text" />
        </div>

        <div className="footer">
        <img className='text' src={text} alt="text" />
        <img className='mobile' src={mobile} alt="text" />
        </div>
    </div>
  );
}

export default App;
