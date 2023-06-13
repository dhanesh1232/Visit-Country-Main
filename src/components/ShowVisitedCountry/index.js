import {
  VisitHead,
  VisitedCountriesList,
  NoVisitedCountries,
  NoVisitedPara,
} from './styledComponents'
import VisitCountryView from '../VisitCountry'
import CountryContext from '../../Context/countryContext'

const CountriesView = () => (
  <CountryContext.Consumer>
    {value => {
      const {visitedList} = value
      visitedList.sort((a, b) => a.name.localeCompare(b.name))
      return (
        <>
          <VisitHead>Visited Countries</VisitHead>
          {visitedList.length === 0 ? (
            <NoVisitedCountries>
              <NoVisitedPara>No Countries Visited Yet!</NoVisitedPara>
            </NoVisitedCountries>
          ) : (
            <VisitedCountriesList>
              {visitedList.map(each => (
                <VisitCountryView key={each.id} viewCountry={each} />
              ))}
            </VisitedCountriesList>
          )}
        </>
      )
    }}
  </CountryContext.Consumer>
)
export default CountriesView
