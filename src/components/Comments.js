function CommentBox() {
    return (
        <div class="p-6 m-3 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <section>
                <img src="https://picsum.photos/200/300" alt="profile" class="rounded-full h-12 w-12 float-left mr-4" />
                <h3 class="font-bold">John Doe</h3>
                <p class="text-sm">Posted on 1/1/2020</p>
            </section>
        
            <hr class="my-6 border-gray-300" />
            <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
            </p>
            
            <div class="flex justify-end">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Reply
                </button>
            </div>

            {/* Replies */ }
            <h3 class="font-bold mt-6">Replies</h3>
            <div class="p-6 m-3 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <section>
                    <img src="https://picsum.photos/200/300" alt="profile" class="rounded-full h-12 w-12 float-left mr-4" />
                    <h3 class="font-bold">John Doe</h3>
                    <p class="text-sm">Posted on 1/1/2020</p>
                </section>
            
                <hr class="my-6 border-gray-300" />
                <p>
                    It uses utility classes for typography and spacing to space content out within the larger
                    container.
                </p>
                
                <div class="flex justify-end">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Comments() {
    return (
        <div>
            
            <CommentBox />
            <CommentBox />
        </div>
    )
}