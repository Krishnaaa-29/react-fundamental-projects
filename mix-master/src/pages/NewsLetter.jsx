import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const url = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const resp = await axios.post(url, data);

    toast.success(resp.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error("Submit Button is not working right now");
    return error;
  }
};

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="Krishna"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastname" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastname"
          id="lastname"
          defaultValue="Kulshreshtha"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        Submit
      </button>
    </Form>
  );
};
export default NewsLetter;
