import * as api from "../utils/api";
import { useContext, useState } from "react";
import { UserContext } from "../context/users";
import { loadingSmall } from "../utils/utils";

const AddComment = ({ setAddComment, articleId, setTotalComments }) => {
  const { signedInUser } = useContext(UserContext);
  const [errMessage, setErrMessage] = useState(false);
  const [noComment, setNoComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notSignedIn, setNotSignedIn] = useState(false);

  const handleCloseClick = () => {
    setAddComment(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (signedInUser.props) {
      setNotSignedIn(true);
      setIsLoading(false);
      return;
    }
    setNotSignedIn(false);

    const comment = event.target.comment.value;
    if (comment.length === 0) {
      setNoComment(true);
      setIsLoading(false);
      return;
    }
    setNoComment(false);
    api
      .postComment(articleId, signedInUser, comment)
      .then(() => {
        setIsLoading(false);
        setAddComment(false);
        setTotalComments((currTotalComments) => currTotalComments + 1);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrMessage(true);
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg">
        <form onSubmit={handleSubmit} id="add-comment-form">
          <div className="flex flex-col pb-6">
            <label htmlFor="add-comment-form" className="pb-6">
              {notSignedIn ? (
                <p className="text-red-500 max-w-[380px]">
                  Please sign in to post a comment
                </p>
              ) : noComment ? (
                <p className="text-red-500 max-w-[380px]">
                  Please enter a comment
                </p>
              ) : errMessage ? (
                <p className="text-red-500 max-w-[380px]">
                  Sorry, there was an error posting your comment. Please try
                  again.
                </p>
              ) : (
                <p className="text-dark">Add a comment</p>
              )}
            </label>
            <textarea
              type="text"
              id="comment"
              name="comment"
              className="w-[400px] h-[150px] border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-primary px-2"
            />
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="mt-4 bg-light hover:bg-gray-400 text-textCol font-bold py-2 px-4 rounded"
              onClick={handleCloseClick}
            >
              Close
            </button>
            {isLoading ? (
              loadingSmall()
            ) : (
              <button
                type="submit"
                className="mt-4 bg-green-500 hover:bg-green-600 text-textCol font-bold py-2 px-4 rounded"
              >
                submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComment;
