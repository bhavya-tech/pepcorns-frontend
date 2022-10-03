function PitchSection(){
    return (
        <div class="text-left">
            <hr class="my-6 border-gray-300" />

            <h2 class="text-3xl font-bold">Pitch Deck</h2>
            <p class="text-lg mt-4">Download our pitch deck to learn more about our company</p>
            
        </div>
    )
}


export default function Pitch() {
    return (
        <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Download Deck Pitch
            </button>

            <PitchSection/>
            <PitchSection/>
            
        </div>
    )
}