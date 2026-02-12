export default function Rent() {
  return (
    <div className="text-[#1A202C] m-[20px] flex gap-[20px] overflow-y-auto h-full no-scrollbar">
      <div className="w-[852px] flex flex-col gap-[20px]">
        {/* BILLING INFO */}
        <div className="p-5 w-full h-[366px] bg-white border rounded-[10px] border-white">
          <h3 className="text-[20px]">Billing Info</h3>
          <div className="flex justify-between">
            <p className="text-[14px] text-[#90A3BF]">
              Please enter your billing info
            </p>
            <p className="text-[14px] text-[#90A3BF]">Step 1 of 4</p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="p-4">
              <h3 className="text-[16px]">Name</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Your name"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Phone Number</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="phone number"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Address</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Address"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Town/City</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Town or city"
              ></input>
            </div>
          </div>
        </div>
        {/*=== BILLING INFO ===*/}
        {/* RENTAL INFO */}
        <div className="p-5 w-full bg-white border rounded-[10px] border-white">
          <h3 className="text-[20px]">Rental Info</h3>
          <div className="flex justify-between">
            <p className="text-[14px] text-[#90A3BF]">
              Please select your rental date
            </p>
            <p className="text-[14px] text-[#90A3BF]">Step 2 of 4</p>
          </div>
          <h3 className="text-[16px] mt-4">Pick-Up</h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="p-4">
              <h3 className="text-[16px]">Locations</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Select your city"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Date</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Select your date"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Time</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Select your time"
              ></input>
            </div>
          </div>
          <h3 className="text-[16px] mt-4">Drop-Off</h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="p-4">
              <h3 className="text-[16px]">Locations</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Select your city"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Date</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Select your date"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Time</h3>
              <input
                type="text"
                className="bg-[#F6F7F9] p-4 w-full mt-2 border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Select your time"
              ></input>
            </div>
          </div>
        </div>
        {/*=== RENTAL INFO ===*/}

        {/* PAYMENT METHOD */}
        <div className="p-5 w-full bg-white border rounded-[10px] border-white">
          <h3 className="text-[20px]">Payment Info</h3>
          <div className="flex justify-between">
            <p className="text-[14px] text-[#90A3BF]">
              Please enter your payment method
            </p>
            <p className="text-[14px] text-[#90A3BF]">Step 3 of 4</p>
          </div>
          <div className="flex justify-between">
            <div className="mt-4">
              <input type="radio"></input>
              <label className="ml-2 text-[16px]">Credit Card</label>
            </div>
            <img src="/icons/Visa.svg"></img>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-[#F6F7F9]">
            <div className="p-4">
              <h3 className="text-[16px]">Card Number</h3>
              <input
                type="text"
                className="bg-white p-4 w-full mt-2  border border-white rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Card number"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Expration Date</h3>
              <input
                type="date"
                className="bg-white p-4 w-full mt-2 border border-white rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Select your date"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">Card Holder</h3>
              <input
                type="text"
                className="bg-white p-4 w-full mt-2 border border-white rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="Card holder"
              ></input>
            </div>
            <div className="p-4">
              <h3 className="text-[16px]">CVC</h3>
              <input
                type="text"
                className="bg-white p-4 w-full mt-2 border border-white rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
                placeholder="CVC"
              ></input>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mt-4">
              <input type="radio"></input>
              <label className="ml-2 text-[16px]">PayPal</label>
            </div>
            <img src="/icons/PayPal.svg"></img>
          </div>
          <div className="flex justify-between">
            <div className="mt-4">
              <input type="radio"></input>
              <label className="ml-2 text-[16px]">Bitcoin</label>
            </div>
            <img src="/icons/Bitcoin.svg"></img>
          </div>
        </div>
        {/*=== PAYMENT METHOD ===*/}

        {/* CONFIRMATION */}
        <div className="p-5 w-full bg-white border rounded-[10px] border-white">
          <h3 className="text-[20px]">Confirmaiton</h3>
          <div className="flex justify-between">
            <p className="text-[14px] text-[#90A3BF]">
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
            <p className="text-[14px] text-[#90A3BF]">Step 4 of 4</p>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div
              className="p-4 bg-[#F6F7F9] w-full border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
            >
              <input type="checkbox"></input>
              <label className="ml-4">
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </label>
            </div>
            <div
              className="p-4 bg-[#F6F7F9] w-full border border-[#F6F7F9] rounded-sm 
                hover:border-[#3563E9] outline-none focus:border-[#3563E9] focus:border-2"
            >
              <input type="checkbox"></input>
              <label className="ml-4">
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
            <div className="font-bold text-white p-4 flex items-center justify-center bg-[#3563E9] hover:bg-[#5A7FEF] cursor-pointer transition-colors duration-200 w-[116px] h-44px border rounded-[4px] flex items-center justify-center text-[16px]">
              Rent Now
            </div>
            <img src="/icons/ic-security-safety.svg"></img>
            <h3 className="text-[16px]">All your data are safe</h3>
            <p className="text-[14px] text-[#90A3BF]">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
        {/*=== CONFIRMATION ===*/}
      </div>
      {/* CAR INFO */}
      <div className="w-[492px] ">
        <div className="w-full h-[560px] bg-white border rounded-[10px] border-none">
          <div className="p-5 w-full h-[366px] bg-white border rounded-[10px] border-white">
            <h3 className="text-[20px]">Rental Summary</h3>
            <p className="text-[14px] text-[#90A3BF]">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
            <div className="flex items-center justify-start gap-4">
              <img className="w-[132px] h-[108px]" src="car.png"></img>
              <div>
                <h1 className="text-[32px] font-bold ">Nissan GT - R</h1>
                <div className="flex gap-4">
                  <img src="/icons/Review Star.svg"></img>
                  <span className="text-[14px] text-[#596780]">
                    440+ Reviewer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== CAR INFO ===*/}
    </div>
  );
}
