import "./App.css";
import Title from "./Title";
import Likes from "./likes";
import Comments from "./Comments";
import Spin from './spin'
import {useSelector} from "react-redux";

function App() {
  const error = useSelector((state) => {
    const { appReducer } = state;
    return appReducer.error;
  });
  console.log('error >>>>',error)

  return (
    <div className="App">
      <div className="wrap">
        <Spin/>
        <div className="card">
          {error && (<div className='error-message'>
            {error}
          </div>)}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
