import Navbar from '../components/navbar';
import '../style/home.css';

const HomeNav = () => (
  <div className="App">
    <header className="App-header">
      <p> Math Magicians</p>
      <Navbar />
    </header>
    <div className="home">
      <h1 className="welcomming">Welcome to Math Magicians</h1>
      <p className="presentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras convallis viverra lectus ac gravida. Aenean sit amet risus ultrices,
        porttitor ante molestie, consequat enim.
        Quisque pulvinar commodo eleifend. Suspendisse laoreet, justo quis laoreet lobortis,
        nunc enim porttitor sem,
        sed pellentesque velit leo sit amet lorem.
        Proin sagittis faucibus nulla,
        consequat aliquet ligula vestibulum ut. Cras pellentesque nisl ac lacinia tristique.
        Cras fermentum tincidunt eros, nec lacinia nisi. Aenean consectetur mi in vehicula molestie.
        Nam lacinia velit vulputate justo fringilla ultrices.
        Mauris a urna in arcu scelerisque condimentum ac ac orci.
        Donec tristique nulla quis nulla auctor tempus.
      </p>
    </div>
  </div>
);

export default HomeNav;
