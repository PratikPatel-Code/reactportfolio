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
      // taken from my regex homework, help of classmate Dylan
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
    <section>
      <div>
        <h1>Contact</h1>
      </div>
      <div>
        <form>
          <div>
            <label for="email">Email address</label>
            <input
              type="email"
              className=""
              id=""
              onBlur={() => emailCheck()}
            />
            <small id="" class=""></small>
          </div>
          <div>
            <label for="name">Name</label>
            <input type="text" onBlur={() => nameCheck()} />
            <small id="nameHelp"></small>
          </div>
          <div className="">
            <label for="message">Message</label>
            <textarea
              className=""
              aria-label="With textarea"
              placeholder="Write your message here!"
              id="message"
              onBlur={() => messageCheck()}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
