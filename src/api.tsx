import axios from "axios"
import { CompanyProfile, CompanySearch } from "./company"

interface SearchResponse {
    data:CompanySearch[];
}


export const searchCompanies = async (query:string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            console.log("mensaje de error: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error API no anda: ", error);
            return "unexpected error API no anda";
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        )
        return data;
    } catch (error:any) {
         console.log("error message from API: ", error.message)
    // if(axios.) {
    //     return
    // } else {
    //     return
    // }
    }
    
   
}