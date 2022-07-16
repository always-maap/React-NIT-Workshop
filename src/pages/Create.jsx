export default function Create() {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Title" />
      </div>
      <div className="">
        <label htmlFor="body">Body</label>
        <textarea id="body" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
