export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return <h1 className="text-center mt-10">Post not found</h1>;
  }

  const blog = await response.json();

  return (
    <div className="mx-auto p-6 text-center">

      <h1 className="text-3xl font-bold mb-4">{blog.name}</h1>

      <p><span className="font-semibold mr-3 text-gray-600">Username:</span>
         <span className="italic  text-gray-600">{blog.username}</span></p>

      <p><span className="font-semibold mr-3 text-gray-600">Email:</span>
         <span className="italic  text-gray-600">{blog.email}</span></p>
    </div>
  );
}