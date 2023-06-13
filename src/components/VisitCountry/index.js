import CountryContext from '../../Context/countryContext'
import {
  ListOfVisitedCountries,
  VisitNameCon,
  VisitName,
  VisitCountryLogo,
  RemoveButton,
} from './styledComponents'

const VisitCountryView = props => {
  const {viewCountry} = props
  const {name, id, imageUrl} = viewCountry
  return (
    <CountryContext.Consumer>
      {value => {
        const {isRemove} = value
        const onRemoveVisitedCountry = () => {
          isRemove(id)
        }
        return (
          <ListOfVisitedCountries>
            <VisitCountryLogo src={imageUrl} alt="thumbnail" />
            <VisitNameCon>
              <VisitName>{name}</VisitName>
              <RemoveButton type="button" onClick={onRemoveVisitedCountry}>
                Remove
              </RemoveButton>
            </VisitNameCon>
          </ListOfVisitedCountries>
        )
      }}
    </CountryContext.Consumer>
  )
}
export default VisitCountryView
