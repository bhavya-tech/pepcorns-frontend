
import React from 'react';
import { DealTermData } from "../data/DealTermData";

class DealTermCardPerks extends React.PureComponent {
  constructor(props){
    super(props);
  }

  DealCardItem(perk) {
    return (
      <p className="flex items-center text-gray-600 mb-2">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>{perk}
      </p>
    )
  }

  render(){
    const listItems = this.props.data.map(
        (element) => this.DealCardItem(element)
    );

    return (
      <div>
        {listItems}
      </div>
    )
  }
  
}

function DealTermCard(data) {
    const dealTerm = data.data;

    return (
      <div className="px-2 py-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 className="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">₹{dealTerm.price}</h1>
          <DealTermCardPerks data={dealTerm.perks}/>
          
          <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-700 rounded">
            Invest ₹{dealTerm.price}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs text-gray-500 mt-3">TNC: {dealTerm.tnc} </p>
        </div>
      </div>
    )
  
}

export default function DealTerms() {
  const dealTerms = DealTermData.map(
    (element) => <DealTermCard data={element}/>
  );
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Deal Terms</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Perks you will receive for Investing Letzrent.</p>

        </div>
        <div className="flex flex-wrap -m-4">

          {dealTerms}

        </div>
      </div>
    </section>
  )
}