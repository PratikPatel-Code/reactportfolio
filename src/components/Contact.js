import React from "react";
import "../css/contact.css";

const notEmpty = (check, location, message) => {
  const field = document.getElementById(check);
  const warning = document.getElementById(location);
  if (field.value === "") {
    warning.textContent = message;
  } else {
    warning.textContent = "";
    if (check === "email") {
      // taken from my regex homework
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regex.test(field.value)) {
        warning.textContent = "Please Input a Valid Email!  Try Again!";
      } else {
        warning.textContent = "";
      }
    }
  }
};

const emailCheck = () => {
  notEmpty("email", "emailHelp", "Valid Email Required!!! Cannot be black!");
};

const nameCheck = () => {
  notEmpty("name", "nameHelp", "Must Input Name!!! Cannot be blank!");
};

const messageCheck = () => {
  notEmpty(
    "message",
    "messageHelp",
    "The message field cannot be left blank!!!"
  );
};

function Contact() {
  return (
    <section className="">
      <div className="">
        <h1 className="">Contact</h1>
      </div>
      <div className="">
        <form className="">
          <div className="">
            <label for="email" className="">
              Email address
            </label>
            <input
              type="email"
              className=""
              id=""
              onBlur={() => emailCheck()}
            />
            <small id="" class=""></small>
          </div>
          <div className="">
            <label for="name" className="">
              Name
            </label>
            <input type="text" className="" id="" onBlur={() => nameCheck()} />
            <small id="nameHelp" class=""></small>
          </div>
          <div className="">
            <label for="message" className="">
              Message
            </label>
            <textarea
              className=""
              aria-label="With textarea"
              placeholder="Write your message here!"
              id="message"
              onBlur={() => messageCheck()}
            ></textarea>
            <small id="messageHelp" class=""></small>
          </div>
          <button type="submit" className="">
            Submit
          </button>
        </form>
        <div className=""></div>
      </div>
    </section>
  );
}

export default Contact;
