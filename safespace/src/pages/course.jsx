import { useState } from "react";
import { FaStar } from "react-icons/fa";

const CourseTemplate = ({ title, lessons, badgeName, averageRating = 4.7 }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [isComplete, setIsComplete] = useState(false);

  const handleRating = (val) => {
    setRating(val);
  };

  const handleSubmit = () => {
    if (rating) {
      setSubmitted(true);
      // Optionally: send rating to backend here
    }
  };

  const handleFinishCourse = () => {
    setIsComplete(true);
  };

  return (
 <div className="w-[50vw] h-[70vh] flex flex-col mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg font-['Inter']">
  <h1 className="text-3xl font-bold text-[#035CBA] mb-4">{title} 🧠</h1>

  {!isComplete ? (
    <>
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Scrollable lesson content */}
        <div className="flex-1 overflow-y-auto mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {lessons[currentLesson].title}
          </h2>
          <p className="text-gray-600 mt-2">{lessons[currentLesson].content}</p>
        </div>

        {/* Navigation Buttons fixed at bottom of card */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
          <button
            onClick={() => setCurrentLesson(currentLesson - 1)}
            disabled={currentLesson === 0}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
          >
            ◀ Back
          </button>
          <p className="text-sm text-gray-600">
            Lesson {currentLesson + 1} of {lessons.length}
          </p>
          {currentLesson === lessons.length - 1 ? (
            <button
              onClick={handleFinishCourse}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Finish 🎉
            </button>
          ) : (
            <button
              onClick={() => setCurrentLesson(currentLesson + 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next ▶
            </button>
          )}
        </div>
      </div>
    </>
  ) : (
    <div>
          <div className="text-center mt-6 h-[70vh] w-[50vw] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">🎉 Course Completed!</h2>
            <p className="text-gray-600">You've earned your badge:</p>
            <span className="inline-block mt-3 bg-green-500 text-white font-semibold px-6 py-2 rounded-full">
              🏅 {badgeName}
            </span>

            <div className="mt-6">
              <p className="font-medium text-gray-700 mb-2">Rate this course:</p>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((val) => (
                  <FaStar
                    key={val}
                    onClick={() => handleRating(val)}
                    className={`cursor-pointer w-6 h-6 ${
                      rating >= val ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!rating}
                  className="mt-4 px-4 py-2 bg-[#035CBA] text-white rounded disabled:opacity-50"
                >
                  Submit Rating
                </button>
              ) : (
                <p className="text-green-600 mt-4 font-semibold">
                  ✅ Thank you! You rated this {rating} stars.
                </p>
              )}
            </div>

            <div className="mt-8 text-sm text-gray-600">
              ⭐ Average Rating from others:{" "}
              <span className="font-bold text-yellow-500">{averageRating.toFixed(1)} / 5</span>
            </div>
          </div>
        </div>
  )}
</div>
  );
};

export default CourseTemplate;

