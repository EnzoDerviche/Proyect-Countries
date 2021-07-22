import {GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRIES_BY_NAME, SORT_ALPHABETICALLY, FILTER_BY_ACTIVITY, SORT_ALPHABETICALLY_REVERSE, FILTER_BY_CONTINENT, SORT_BY_POPULATION, SORT_BY_POPULATION_DESC} from "../actions/index";
import{sortAlphabeticallyAz, sortByPopulation} from "../filters/index";


const initialState = {
    countries : [], 
    countryDetail : {}, 
    countriesFiltered:[]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:{ 
            return{
                ...state,
                countries: action.payload,  //estado con todos los countries
                countriesFiltered: action.payload // estado de referencia para fitrar
            }
        }
        case GET_COUNTRIES_BY_NAME:{
            return{
                ...state,
                countriesFiltered: action.payload
            }
        }
        case GET_COUNTRY_DETAIL:{
            return{
                ...state,
                countryDetail: action.payload
            }
        }
        case SORT_ALPHABETICALLY:{
            return {
                ...state,
                countriesFiltered: state.countries.slice().sort(sortAlphabeticallyAz)
            }
        }
        case SORT_ALPHABETICALLY_REVERSE:{
            return {
                ...state,
                countriesFiltered: state.countries.slice().sort(sortAlphabeticallyAz).reverse()
            }
        }
        case SORT_BY_POPULATION:{
            return {
                ...state,
                countriesFiltered: state.countries.slice().sort(sortByPopulation).reverse()
            }
        }
        case SORT_BY_POPULATION_DESC:{
            return {
                ...state, 
                countriesFiltered: state.countries.slice().sort(sortByPopulation)
            }
        }
        case FILTER_BY_CONTINENT:{
            return{
                ...state,
                countriesFiltered: state.countries.filter((c)=> c.continent === action.payload)
            }
        }
        case FILTER_BY_ACTIVITY:{
            return{
                ...state,
                countriesFiltered: state.countries.filter((c) => {
                    return c.activities.some((a) => a.name === action.payload)
                })
            }
        }

        default: return state
    }
}
export default rootReducer