import { useForm } from "react-hook-form";

import "./PostIt.css";

const Card = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="header">
      <h2>POST IT</h2>
      <div className="forminputcontainer">
        <form
          onSubmit={handleSubmit((data) => props.submitPost(data))}
          className="form-input"
        >
          <input
            {...register("title", { required: true })}
            className="title"
            placeholder="Title"
          ></input>
          {errors.title?.type === "required" && (
            <p className="errormsg">*Title is required</p>
          )}
          <input
            {...register("description", { required: true })}
            placeholder="Enter Your Text"
            className="usertext"
          ></input>
          {errors.description?.type === "required" && (
            <p className="errormsg">*Description is required</p>
          )}
          <input
            type="url"
            {...register("image", { required: true })}
            placeholder="Enter Your URL"
            className="userimgurl"
          ></input>
          {errors.image?.type === "required" && (
            <p className="errormsg">Enter Valid URL</p>
          )}
          <input
            {...register("category", { required: true })}
            placeholder="Category"
            className="category_get"
          ></input>
          {errors.category?.type === "required" && (
            <p className="errormsg">*Category is required</p>
          )}
          <button className="postbtn">POST IT</button>
        </form>
      </div>
    </div>
  );
};

export default Card;
