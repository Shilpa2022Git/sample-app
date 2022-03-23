import PropTypes from "prop-types"

//PropTypes is validating arguments datatype. ReactJS props validator contains big list of validators. ex: PropTypes.any
//PropTypes.string	The props should be a string.
//8.	PropTypes.symbol	The props should be a symbol.
//9.	PropTypes.instanceOf	The props should be an instance of a particular JavaScript class.
//10.	PropTypes.isRequired  The props must be provided. etc...

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

BlogList.propTypes = {
    title:  PropTypes.string
}

BlogList.defaultProps = {
    title: "Imp Blogs"
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