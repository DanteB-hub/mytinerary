import React from "react";

const CityList = ({cities}) =>
    cities.map(city => <li key={city}>{city}</li>)

export default CityList