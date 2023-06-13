import React from 'react'

const CountryContext = React.createContext({
  onVisitCountry: () => {},
  isRemove: () => {},
  visitedList: [],
  countriesList: [],
})
export default CountryContext
