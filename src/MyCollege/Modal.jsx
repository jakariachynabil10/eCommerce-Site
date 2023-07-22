import React from "react";

const Modal = ({
  CollegeName,
  candidateName,
  email,
  subject,
  photo,
  address,
  dateOfBirth,
  phoneNumber,
  _id,
  index,
}) => {
//   console.log(window.my_modal_5, "window");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;

    const feedback = {
      review,
      rating,
    };

    const url = "http://localhost:4612/feedback";
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Applied Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <tr>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <th>{index + 1}</th>
        <td>{CollegeName}</td>
        <td>{candidateName}</td>
        <td>{subject}</td>
        <td>{phoneNumber}</td>
        <td>
          <label  htmlFor={_id}>
            <button
            
              className="border px-7 py-2 rounded bg-image text-white transition-all duration-500 ease-linear hover:scale-105 transform-cpu"
            >
              FeedBack
            </button>
          </label>

          <dialog id={_id} className="modal modal-bottom sm:modal-middle">
            <form
              onSubmit={handleFeedbackSubmit}
              method="dialog"
              className="modal-box"
            >
              <div className="lg:flex mb-8">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text">Review</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="review"
                      placeholder="Give your valuable Feedback"
                      defaultValue={CollegeName}
                      required
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control lg:w-1/2  lg:ml-4">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="rating"
                      placeholder="Rating"
                      className="input input-bordered w-full"
                      min="0"
                      max="5"
                      required
                    />
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Send"
                className=" border bg-image border-[#f36b3b] rounded-lg px-8 py-2 text-white duration-300  w-full   text-center cursor-pointer"
              />
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </td>
      </tr>
      
    </>
  );
};

export default Modal;
