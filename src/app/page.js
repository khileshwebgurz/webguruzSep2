
import Home from './home/page'
import SearchPage from './search/page'
const page = ({searchParams}) => {
    if (searchParams.s) {
        // Render SearchPage if `s` query parameter is present
       
        return <SearchPage searchTerms={searchParams.s} />;
      }
    
      // Render HomePage by default
      return <Home />;
}

export default page