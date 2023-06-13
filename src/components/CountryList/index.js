import CountryContext from '../../Context/countryContext'
import CountryVisit from '../CountryVisit'
import {CountryHead, CountryNames} from './styledComponents'

const CountryList = () => (
  <CountryContext.Consumer>
    {value => {
      const {countriesList, onVisitCountry} = value
      const onVisit = id => {
        onVisitCountry(id)
      }
      countriesList.sort((a, b) => a.name.localeCompare(b.name))
      return (
        <>
          <CountryHead>Countries</CountryHead>
          <CountryNames>
            {countriesList.map(each => (
              <CountryVisit key={each.id} each={each} onVisit={onVisit} />
            ))}
          </CountryNames>
        </>
      )
    }}
  </CountryContext.Consumer>
)
export default CountryList
