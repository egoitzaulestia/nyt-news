import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const NewsForm = () => {
  const { addArticle } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    byline: "",
    abstract: "",
  });

  const handleChange = (event) => {
    console.log(event);
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // We build a "fake" article object
    const newArticle = {
      id: Date.now(),
      title: form.title,
      byline: form.byline,
      abstract: form.abstract,
      url: "#", // We don't provide a real URL
      media: [], // if empty we show placeholder
    };

    addArticle(newArticle);

    setTimeout(() => {
      navigate("/list");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="news-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="byline">Byline</label>
        <input
          id="byline"
          name="byline"
          value={form.byline}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="abstract">Abstract</label>
        <textarea
          id="abstract"
          name="abstract"
          value={form.abstract}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <button type="submit">Add Article</button>
    </form>
  );
};

export default NewsForm;
