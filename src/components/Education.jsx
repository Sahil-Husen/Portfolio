import React from "react";

function Education() {
  return (
    <div className="">
      <div>
        <h1 className="mt-20 font-bold text-xl">Education</h1>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex gap-10">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Aligarh Muslim University </h3>
            </div>
          </div>

          <div>2025-2027</div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-10">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Khwaja Moinuddin Chishti Language University, Lucknow</h3>
            </div>
          </div>

          <div>2025-2027</div>
        </div>
         
      </div>
    </div>
  );
}

export default Education;
