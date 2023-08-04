import Image from "next/image"
import React, {useState} from "react";

const FeedbackCard = () => {

  const [selected, setSelected] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);


  function handleSubmit() {
  }

  function handleSubmitClick() {
    if(!selected) {
      return;
    }
    setSubmitted(true)
  }

  return (
    <>
      ${submitted ?

      <div className="bg-gradient-to-tr from-[#171e28] via-[#1f2630] to-[#1f2630] p-8 rounded-3xl shadow-lg flex flex-col items-center w-[314px] space-y-4">
        <Image
          src="/images/illustration-thank-you.svg"
          alt="thank-you-picture"
          width={100}
          height={800}
        />

        <div className="bg-[#272e38] rounded-full px-3 py-2">
          <p className="text-primary text-xs">You selected {selected} out of 5</p>
        </div>

        <h2 className="text-white text-xl">Thank you!</h2>
        <p className="text-[#9ca3b3] text-xs text-opacity-70 text-center">
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>
      </div>

      :

      <div
        className="bg-gradient-to-tr from-[#171e28] via-[#1f2630] to-[#1f2630] p-8 rounded-3xl shadow-lg flex flex-col justify-center w-[314px] space-y-6">
        {/*  Icon */}
        <div className="bg-[#252e37] rounded-full p-3 inline-block self-start items-center justify-center">
          <Image src="/images/icon-star.svg" alt="star icon" width={14} height={14} />
        </div>

        {/*  Title */}
        <div className="flex flex-col space-y-1 pb-2">
          <h1 className="text-white text-xl ">How did we do?</h1>

          {/*  Description*/}
          <p className="text-[#9ca3b3] text-xs text-opacity-70">
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering! </p>
        </div>

        {/*  Rating Buttons*/}
        <div className="flex">
          <div className="rounded-md shadow-lg flex justify-center space-x-3">
            {[1, 2, 3, 4, 5].map((number) => (
              <button onClick={() => {
                setSelected(number)
              }} key={number} className={
                `${number === selected ? 'bg-neutral-mediumgrey' : 'bg-[#262f38]'}
                  rounded-full h-10 w-10 flex items-center justify-center text-center 
                  hover:bg-primary transition-colors duration-200
                  text-xs text-white text-opacity-70 font-semibold`}>
                {number}
              </button>
            ))}
          </div>
        </div>

        {/*  Submit*/}
        <button onClick={handleSubmitClick} className="text-md bg-primary text-white hover:bg-white hover:text-primary transition-colors duration-150
            py-2 px-4 rounded-full tracking-widest">
          SUBMIT
        </button>
      </div>

    }
    </>
  );
};

export default FeedbackCard;
