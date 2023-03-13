import React from 'react';
import './section5.css';

/*
*This section will be for the contact section
TODO: Make form section with FN, LN, Email, Message, Reason, Captcha
*/

const classes = {
  blueText: 'text-[#00ADBB]',
  blank: '',
};

const formParts = {
  name: 'w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#00ADBB] focus:shadow-md',
};

function Section5({ sectionClass }) {
  return (
    <section className={sectionClass}>
      <div className="flex">
        <div className="grid-rows-7 grid h-[31rem] w-[31rem] content-center">
          <div className="row-span-5 border-r-2 border-[#00ADBB]">
            <div className="info content-center text-center text-8xl text-white">
              <br></br>
              <h1>
                <span className={classes.blueText}>Contact</span>
                <br></br>Us
              </h1>
              <br></br>
            </div>
          </div>
        </div>
        <div className="grid-rows-7 justify-content-center grid h-[31rem]">
          <div className="grid-rows-7 grid h-[31rem] w-full content-center">
            <div class="flex items-center justify-center p-12">
              <div class="mx-auto w-full max-w-[550px]">
                <form action="" method="POST" id="contactForm">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-2">
                        <label
                          for="fName"
                          class="mb-1 block text-base font-medium text-[#07074D]"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="First Name"
                          className={formParts.name}
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-2">
                        <label
                          for="lName"
                          class="mb-1 block text-base font-medium text-[#07074D]"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          placeholder="Last Name"
                          className={formParts.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      for="guest"
                      class="mb-1 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="name@email.com"
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#00ADBB] focus:shadow-md"
                    />
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-2">
                        <label
                          for="date"
                          class="mb-1 block text-base font-medium text-[#07074D]"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#00ADBB] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-2">
                        <label
                          for="time"
                          class="mb-2 block text-base font-medium text-[#07074D]"
                        >
                          Reason for Contact
                        </label>
                        <select
                          type="select"
                          name="select"
                          id="select"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#00ADBB] focus:shadow-md"
                        >
                          <option selected>Choose a Response</option>
                          <option value="US">Example</option>
                          <option value="CA">example 2</option>
                          <option value="FR">example 3</option>
                          <option value="DE">example 4</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="mb-5">
                    <label class="mx-2 mb-1 block text-base font-medium text-[#07074D]">
                      Message
                    </label>
                    <div class="mx-2 flex items-center space-x-6">
                      <div class="flex w-full items-center">
                        <textarea
                          name="textarea"
                          id="textarea"
                          form="contactForm"
                          class="w-full"
                          rows="4"
                          cols="60"
                          resize="none"
                        />
                        <label
                          for="radioButton1"
                          class="pl-3 text-base font-medium text-[#07074D]"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="hover:shadow-form rounded-md bg-[#00ADBB] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;

/*
 <form className="row-span-5 w-[31rem] h-[31rem] grid grid-rows-3 grid-flow-col content-center">
                    
                    <div className="row-span-1 col-span-2">
                        <div class="">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-mail
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-[#00ADBB] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
*/
