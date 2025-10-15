import React from "react";
import RoomImage5 from "../../assets/RoomImg5.jpg";

const WeeklyBlog7 = () => {
  return (
    <div className="flex justify-center my-12 px-18">
      <div className="w-full max-w-6xl">
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content - left on desktop, bottom on mobile */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-yellow-600 m-0">User Satisfaction</p>
                <h3 className="text-2xl lg:text-3xl font-bold mt-2">
                  User Testimonials
                </h3>
                <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                  Flatally has earned a reputation as a leading platform for
                  finding compatible roommates, as evidenced by the countless
                  positive testimonials from satisfied users. Our platform's
                  success is attributed to its ability to create harmonious
                  living situations by matching individuals with similar
                  lifestyles and preferences. Flatally's user-centric approach
                  has resulted in a loyal following of individuals who have
                  found their ideal roommates through our platform. Users
                  consistently praise the platform's ease of use, the accuracy
                  of the matching algorithm, and the positive impact it has had
                  on their lives. These testimonials serve as a testament to
                  Flatally's commitment to providing an exceptional roommate
                  matching experience. Our platform's commitment to user
                  satisfaction is evident in the numerous testimonials that
                  praise Flatally's ease of use, accurate matching algorithm,
                  and positive impact on users' lives. By creating a supportive
                  community and fostering harmonious living situations, Flatally
                  has become the go-to platform for individuals seeking
                  compatible roommates.
                </p>
              </div>
            </div>
          </div>

          {/* Image - right on desktop, top on mobile */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden min-h-[20rem] h-[30rem] w-full">
              <img
                src={RoomImage5}
                alt="Room"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyBlog7;
