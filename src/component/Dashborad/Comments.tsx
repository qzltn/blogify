function Comments() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Comments</h2>

      <p className="mt-2 text-gray-500">
        Manage your comments here.
      </p>

      <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <p className="text-gray-500">
          No comments yet.
        </p>
      </div>
    </div>
  );
}

export default Comments;