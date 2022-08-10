import { useCreateNewsMutation } from "../hooks/useCreateNewsMutation";

export default function Create() {
  const createNewsMutation = useCreateNewsMutation();

  function onSubmit(e) {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const title = formData.get("title");
    const body = formData.get("body");
    createNewsMutation.mutate({ title, body });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
        />
      </div>
      <div className="">
        <label htmlFor="body">Body</label>
        <textarea id="body" name="body" rows="3" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
