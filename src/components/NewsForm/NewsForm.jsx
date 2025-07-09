import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const NewsForm = () => {
  const { addArticle } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    byline: "",
    abstract: "",
  });

  const handleInputChange = (event) => {
    console.log(event);
    setForm((form) => ({ ...form, [event.tarnet.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      navigate("/list");
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={data.title}
        onChange={handleInputChange}
        name="title"
      />
      <input
        type="text"
        placeholder="byline"
        value={data.byline}
        onChange={handleInputChange}
        name="byline"
      />

      <textarea
        placeholder="Write your story here…"
        name="body"
        value={data.body}
        onChange={handleInputChange}
        rows={6} /* height */
        cols={40} /* width */
        style={{ resize: "vertical" }} /* allow only vertical resize */
      />
      <button type="submit">Add article</button>
    </form>
  );
};

export default NewsForm;
