import { PitchData } from "../data/PitchData";

function PitchSection(heading, content){
    
    return (
        <div class="text-left">
            <hr class="my-6 border-gray-300" />

            <h2 class="text-3xl font-bold">{heading}</h2>
            {content()}
            
        </div>
    )
}


export default function Pitch() {
    const pitchContent = PitchData.map((item) => PitchSection(item.heading, item.content));
    return (
        <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onclick="location.href='https://api.pepcorns.com/clientassets/icon1651230174497.pdf'">
                Download Deck Pitch
            </button>

            {pitchContent}
            
        </div>
    )
}