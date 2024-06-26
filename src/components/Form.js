import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles/Reservations.css";

const schema = yup.object({
  name: yup.string().required("Full name is a required field!"),
  email: yup
    .string()
    .required("Email is a required field!")
    .email("Email is not valid!"),
  phone: yup
    .string()
    .required("Phone is a required field!")
    .matches(
      /^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/,
      "Phone number must match the form +000 00 000 0000"
    ),
  guests: yup.string().required("Please specify number of guests!"),
  date: yup.string().required("Please select date and time!"),
});

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.table(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <fieldset>
        <div className="field">
          <label htmlFor="date">Date & Time</label>
          <input type="datetime-local" name="date" {...register("date")} />
          <span className="error-message">{errors.date?.message}</span>
        </div>

        <div className="field guest">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder="1"
            name="guests"
            {...register("guests")}
          />
          <span className="error-message">{errors.guests?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            {...register("name")}
          />
          <span className="error-message">{errors.name?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="phone">Your Phone</label>
          <input
            type="tel"
            placeholder="+000 00 000 0000"
            name="phone"
            {...register("phone")}
          />
          <span className="error-message">{errors.phone?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            placeholder="...@..."
            name="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <button className="reserve-btn" type="submit">
          Book Now
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
