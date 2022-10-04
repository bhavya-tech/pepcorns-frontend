import { UpdateData } from "../data/UpdateData";

function UpdateCard(title, content, date) {
    return (
        <div className="w-full p-6 m-3 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <section>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm">Posted on {date}</p>
            </section>
            <hr className="my-6 border-gray-300" />
            <p>
                {content}
            </p>
        </div>
    );
}

export default function Updates() {
    const updateItems = UpdateData.map((update) => UpdateCard(update.title, update.content, update.date));
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            {updateItems}
        </div>
    )
}