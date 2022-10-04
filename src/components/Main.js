import Hero from './Hero'
import Header from './Header'
import DataTabs from './Tabs'
import Campaign from './Campaign'

export default function Main() {
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