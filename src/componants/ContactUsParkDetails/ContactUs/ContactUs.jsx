import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FilledButton from "../../Buttons/FilledButton/FilledButton";
import Title from "../../Title/Title";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
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
