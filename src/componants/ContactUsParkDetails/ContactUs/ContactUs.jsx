import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FilledButton from "../../Buttons/FilledButton/FilledButton";
import Title from "../../Title/Title";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_1dld8hv", "template_gdhm91r", form.current, {
        publicKey: "201HU-ZMEMBhflVAr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            title: "Email send successfully!",
            icon: "success",
            showCancelButton: false,
            timer: 1200,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-[600px]">
      <Title title={"Get In"} colored={"Touch"} />

      <form className="my-6 space-y-3" ref={form} onSubmit={sendEmail}>
        {/* <div className="">
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div> */}
        <input
          type="text"
          placeholder="Full Name"
          name="user_name"
          required
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          required
          className="input input-bordered w-full"
        />
        {/* <input
          type="email"
          placeholder="Phone Number"
          className="input input-bordered w-full"
        /> */}
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write your qustion here"
          required
          name="message"
          rows={10}
        ></textarea>
        <div className="flex justify-center">
          <FilledButton text="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
