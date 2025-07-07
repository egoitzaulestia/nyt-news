import { useState } from "react";

const NewsForm = () => {
  const [data, setData] = useData({});

  const handleInputChange = (event) => {
    console.log(event);
  };

  const handleSubmit = (event) => {
    console.log(event);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="headline"
        value={data.headline}
        onChange={handleInputChange}
        name="headline"
      />
      <input
        type="text"
        placeholder="headline"
        value={data.headline}
        onChange={handleInputChange}
        name="headline"
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
    </form>
  );
};

export default NewsForm;
