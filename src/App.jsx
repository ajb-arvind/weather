import { useState } from 'react';

import Location from './Location';
import SingledayWeather from './SingledayWeather';
import MultidayWeather from './MultidayWeather';
import HourlyWeather from './HourlyWeather';

function App() {
  const [ShowSearchBar, setShowSearchBar] = useState(false);
  const [showList, setShowList] = useState(false);
  const [coordinate, setCoordinate] = useState({
    latitude: '18.51957',
    longitude: '73.85535',
  });

  const displaySearchBar = (setCityName) => {
    setShowSearchBar(true);
    setCityName('');
  };
  const displayList = () => {
    setShowList(true);
  };

  return (
    <>
      {ShowSearchBar ? (
        <div
          className="fixed w-screen h-screen  backdrop-blur-[1px] z-[2]"
          onClick={() => {
            setShowSearchBar(false);
            setShowList(false);
          }}
        ></div>
      ) : null}
      <main className="py-12 px-6 mx-auto max-w-screen-xl text-center md:py-16 md:px-12">
        <Location
          ShowSearchBar={ShowSearchBar}
          showList={showList}
          setShowSearchBar={setShowSearchBar}
          displaySearchBar={displaySearchBar}
          displayList={displayList}
          setCoordinate={setCoordinate}
        />

        <SingledayWeather coordinate={coordinate} />

        <HourlyWeather coordinate={coordinate} />

        <MultidayWeather coordinate={coordinate} />
        <a href="https://www.flaticon.com/free-icons/star" title="star icons">
          Star icons created by iconixar - Flaticon
        </a>
      </main>
    </>
  );
}

export default App;
