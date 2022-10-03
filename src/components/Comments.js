import { CommentsData } from "../data/CommentsData";

function ReplyBox(name, date, comment) {
    return (
        <div class="p-6 m-3 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <section>
                <img src="https://picsum.photos/200/300" alt="profile" class="rounded-full h-12 w-12 float-left mr-4" />
                <h3 class="font-bold">{name}</h3>
                <p class="text-sm">Posted on {date}</p>
            </section>

            <hr class="my-6 border-gray-300" />
            <p>
                {comment}
            </p>
        </div>
    );
}

function CommentBox(name, date, comment, replies) {
    const repliesList = replies ? replies.map((reply) => ReplyBox(reply.name, reply.posted_on, reply.comment)) : null;

    return (
        <div class="p-6 m-3 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <section>
                <img src="https://picsum.photos/200/300" alt="profile" class="rounded-full h-12 w-12 float-left mr-4" />
                <h3 class="font-bold">{name}</h3>
                <p class="text-sm">Posted on {date}</p>
            </section>

            <hr class="my-6 border-gray-300" />
            <p>
                {comment}
            </p>

            <div class="flex justify-end">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Reply
                </button>
            </div>

            {/* Replies */}
            <h3 class="font-bold mt-6">Replies</h3>
            {repliesList}
        </div>
    )
}

export default function Comments() {
    const commentData = CommentsData;
    console.log(commentData);
    const comments = commentData.map((comment) => CommentBox(comment.name, comment.posted_on, comment.comment, comment.replies));
    return (
        <div>
            <h1 class="text-4xl font-bold">Comments</h1>
            {comments}
        </div>
    )
}