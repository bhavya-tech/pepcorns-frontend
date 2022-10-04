import 'tw-elements';
import { TeamData, FAQData } from '../data/DetailsData';
import React
    from 'react';
function HowUseFunds() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">How we use funds</h1>
                <div className="flex flex-wrap -m-4">

                    <div className="p-4 w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">

                            <p className="leading-relaxed mb-6">
                                Sales & Marketing - 50% | Human Resource-30% | Technology -10% | OPEX-10%
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function DataTab() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">

                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/2 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Start Date</h2>
                            <h1 class="text-4xl text-gray-900 font-medium title-font mb-2">2022-06-26</h1>
                            <p class="leading-relaxed text-base">Ends in 0 days</p>
                        </div>
                    </div>
                    <div class="xl:w-1/2 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Target Raised</h2>
                            <h1 class="text-4xl text-gray-900 font-medium title-font mb-2">5000000</h1>
                            <p class="leading-relaxed text-base">0% Raised so far</p>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    )
}
class Faq extends React.PureComponent {
    QnA(index, question, answer) {
        return (
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne5">
                    <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true"
                        aria-controls="collapseOne5">
                        {question}
                    </button>
                </h2>
                <div id={`collapse${index}`} className="accordion-collapse collapse show" aria-labelledby="headingOne5">
                    <div className="accordion-body py-4 px-5">
                        {answer}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const listFAQ = FAQData.map((faq) => this.QnA(faq.id, faq.question, faq.answer));
        return (
            <div>
                {listFAQ}
            </div>
        )
    }
}



function TeamCard(name, position, imgUrl) {

    return (
        <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={imgUrl} />
                <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
                    <h3 className="text-gray-500 mb-3">{position}</h3>

                    <span className="inline-flex">
                        <a className="text-gray-500 hover:text-indigo-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-2 text-gray-500 hover:text-indigo-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-2 text-gray-500 hover:text-indigo-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function Details() {
    const teamItems = TeamData.map((item) => TeamCard(item.name, item.position, item.imgUrl))
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet our strong and visionary team members.</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {teamItems}
                </div>
                <HowUseFunds />
                <DataTab />
                {/* <FAQ /> */}
                <Faq />
            </div>
        </section>
    )
}