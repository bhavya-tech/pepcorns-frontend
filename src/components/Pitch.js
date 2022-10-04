import { PitchData } from "../data/PitchData";

function PitchSection(heading, content) {

    return (
        <div className="text-left">
            <hr className="my-6 border-gray-300" />

            <h2 className="text-3xl font-bold">{heading}</h2>
            <br />
            {content()}

        </div>
    )
}

export default function Pitch() {
    const pitchContent = PitchData.map((item) => PitchSection(item.heading, item.content));
    return (
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <a href="https://api.pepcorns.com/clientassets/icon1651230174497.pdf">
                <button className="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Download Deck Pitch
                </button>
            </a>
            {pitchContent}

        </div>
    )
}