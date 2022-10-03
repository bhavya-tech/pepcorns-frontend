
import React from 'react';
import { DealTermData } from "../data/DealTermData";

class DealTermCardPerks extends React.PureComponent {
  constructor(props){
    super(props);
  }

  DealCardItem(perk) {
    return (
      <p class="flex items-center text-gray-600 mb-2">
        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
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
      <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">₹{dealTerm.price}</h1>
          <DealTermCardPerks data={dealTerm.perks}/>
          
          <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
            Invest ₹{dealTerm.price}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">TNC: {dealTerm.tnc} </p>
        </div>
      </div>
    )
  
}

export default function DealTerms() {
  const dealTerms = DealTermData.map(
    (element) => <DealTermCard data={element}/>
  );
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Deal Terms</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Perks you will receive for Investing Letzrent.</p>

        </div>
        <div class="flex flex-wrap -m-4">

          {dealTerms}

        </div>
      </div>
    </section>
  )
}