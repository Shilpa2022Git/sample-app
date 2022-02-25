//Stateless fucntional compnent
//Accepting arguments in 'props' object. ANother way is to accept each varible in curly braces, as below
//One way to initialize array variable movies: "" to movies: []
const BlogList = ( {blogs, title} ) => {
    return ( 
        <div>
            <h1>Blog list from another component {title}!!</h1>
            { blogs.map((blog) => (
                <div className="blList" key={blog.id}>
                    {blog.title} is written by {blog.author}
                </div>
             ))}
        </div>
     );
}


/*
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return ( 
        <div>
            <h1>Blog list from another component {title}!!</h1>
            {   blogs.map((blog) => (
                <div className="blList" key={blog.id}>
                    {blog.title} is written by {blog.author}
                </div>
             ))}
        </div>
     );
}
 
*/
export default BlogList;