import FilledButton from "../../Buttons/FilledButton/FilledButton";
import Title from "../../Title/Title";

const ContactUs = () => {
  return (
    <div className="max-w-[600px]">
      <Title title={"Get In"} colored={"Touch"} />

      <form className="my-6 space-y-3">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write your qustion here"
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
