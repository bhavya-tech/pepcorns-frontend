import Hero from './Hero'
import Header from './Header'
import DataTabs from './Tabs'
import Campaign from './Campaign'
import Comments from './Comments'
import Pitch from './Pitch'
import DealTerms from './DealTerms'

export default function Main(){
    return (
        <div>
            <Header />
            <Hero />
            <Campaign />
            <DataTabs />
            {/* <DealTerms/> */}
        </div>
        
    )
}