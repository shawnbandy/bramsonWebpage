import React from "react";
import bp from '../../../assets/img/bpw.png'
import './navbar.css'

//bg-[#00ADBB]

const classes = {
    listItem: "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent hover:text-xl", 
    unorderedList: "flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
}

function Navbar(){
    return(
  
<nav class="p-3 rounded bg-[#00ADBB]">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <img src={bp} class="w-52" alt="Bramson Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class={classes.unorderedList}>
        <li>
          <a href="#AboutUs" className={classes.listItem}>About Us</a>
        </li>
        <li>
          <a href="#Services" className={classes.listItem}>Services</a>
        </li>
        <li>
          <a href="#News" className={classes.listItem}>News</a>
        </li>
        <li>
          <a href="#Contact" className={classes.listItem}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar