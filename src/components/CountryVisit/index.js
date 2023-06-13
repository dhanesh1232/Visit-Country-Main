import {
  CountryListValue,
  CountryName,
  VisitButton,
  IsVisitedPara,
} from './styledComponents'

const CountryVisit = props => {
  const {each, onVisit} = props

  const onVisitCountry = () => {
    onVisit(each.id)
  }
  return (
    <>
      <CountryListValue>
        <CountryName>{each.name}</CountryName>
        {each.isVisited ? (
          <IsVisitedPara>Visited</IsVisitedPara>
        ) : (
          <VisitButton type="button" onClick={onVisitCountry}>
            Visit
          </VisitButton>
        )}
      </CountryListValue>
    </>
  )
}
export default CountryVisit
