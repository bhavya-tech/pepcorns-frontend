import { CommentsData } from "../data/CommentsData";
import 'tw-elements';

function ReplyBox(name, date, comment) {
    return (
        <div className="p-6 m-3 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <section>
                <img src="https://picsum.photos/200/300" alt="profile" className="rounded-full h-12 w-12 float-left mr-4" />
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm">Posted on {date}</p>
            </section>

            <hr className="my-6 border-gray-200" />
            <p>
                {comment}
            </p>
        </div>
    );
}

function CommentBox(name, date, comment, replies) {
    const repliesList = replies ? replies.map((reply) => ReplyBox(reply.name, reply.posted_on, reply.comment)) : null;

    return (
        <div className="p-6 m-3 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <section>
                <img src="https://picsum.photos/200/300" alt="profile" className="rounded-full h-12 w-12 float-left mr-4" />
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm">Posted on {date}</p>
            </section>

            <hr className="my-6 border-gray-300" />
            <p>
                {comment}
            </p>

            <div className="flex justify-end">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" data-bs-target="#exampleModal" data-bs-toggle="modal">
                    Reply
                </button>
            </div>


            {replies && <h3 className="font-bold mt-6">Replies</h3>}

            {repliesList}
        </div>
    )
}

function CommentModal() {
    return (
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Comment</h5>
                        <button type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5 py-5 mx-auto">

                            <div className="w-full mx-auto">
                                <div className="flex flex-wrap -m-2">

                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button" className="px-6
          py-2.5
          bg-gray-300
          text-gray-600
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-300 hover:shadow-lg
          focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray-500 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="px-6
      py-2.5
      bg-indigo-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-700 hover:shadow-lg
      focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Comments() {
    const commentData = CommentsData;
    console.log(commentData);
    const comments = commentData.map((comment) => CommentBox(comment.name, comment.posted_on, comment.comment, comment.replies));
    return (
        <div>
            <h1 className="text-4xl font-bold">Comments</h1>
            {comments}
            <CommentModal />
        </div>
    )
}