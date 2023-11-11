import { FaLocationDot } from 'react-icons/fa6';
import { FaAngleDown, FaAngleRight, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { locationAPI } from './utils/api';

const Location = ({
  ShowSearchBar,
  showList,
  displaySearchBar,
  displayList,
  setCoordinate,
  setShowSearchBar,
}) => {
  const [cityList, setCityList] = useState([]);
  const [cityName, setCityName] = useState('');
  const [selectedCity, setSelectedCity] = useState('Pune, Maharashtra, India');

  const handleInputChange = async (e) => {
    setCityName(e.target.value);
    if (cityName) {
      try {
        const response = await locationAPI(cityName);

        setCityList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    } else {
      setCityList([]);
    }
  };

  const handleCitySelection = (city, latitude, longitude) => {
    setCoordinate({ latitude, longitude });
    setCityName(city);
    setSelectedCity(city);
    setCityList([]);
  };

  return (
    <section className="flex flex-wrap items-center py-8 px-8 ">
      <div
        className={`flex flex-nowrap items-center gap-2 px-8 cursor-pointer ${
          ShowSearchBar ? 'hidden' : ''
        }`}
        onClick={() => displaySearchBar(setCityName)}
      >
        <FaLocationDot style={{ fontSize: '1.5rem', color: 'red' }} />
        <p className=" capitalize font-semibold font text-base">
          {selectedCity}
        </p>
        <div className="hidden md:inline">
          <FaAngleRight />
        </div>
        <div className="md:hidden">
          <FaAngleDown />
        </div>
      </div>
      <div
        id="searchResult"
        aria-hidden="true"
        className={`fixed justify-center top-20 left-1/2 -translate-x-1/2 mx-auto w-2/3 z-50 shadow-xl rounded-lg transition-all${
          ShowSearchBar ? '' : ' hidden'
        }`}
      >
        <form>
          <label htmlFor="city"></label>
          <div className="relative">
            <input
              type="text"
              id="city"
              name="city"
              className="block pl-10 w-full  text-gray-900 rounded-t-lg border-none "
              placeholder="Search Place"
              onClick={displayList}
              value={cityName}
              onChange={handleInputChange}
            ></input>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none  ">
              <FaSearch className=" w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </form>
        {showList ? (
          <ul
            id="searchResult"
            className=" max-h-48 overflow-y-auto text-gray-700 dark:text-gray-200 "
          >
            {cityList &&
              cityList.map((x) => {
                const city = x.name + ', ' + x.admin1 + ', ' + x.country;
                return (
                  <li
                    key={x.id}
                    className="flex items-center pl-10 py-2 bg-white hover:bg-gray-100"
                    onClick={() => {
                      handleCitySelection(city, x.latitude, x.longitude);
                      setShowSearchBar(false);
                    }}
                  >
                    {city}
                  </li>
                );
              })}
          </ul>
        ) : null}
      </div>
    </section>
  );
};
export default Location;
