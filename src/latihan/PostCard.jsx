import { useState } from "react";

const PostCard = ({ title, body }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`p-6 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-gray-600">
        {body}
      </p>
    </div>
  );
};

export default PostCard;
