import { useState } from "react";
import BlogList from "./BlogList";

function Home(){

    //To update field data we have to use hooks
    let name = 'Parle-G';

    //Step1 to set initial state/value
    //Step2 use declared function ex setCity to update value
    // syntax [var, function] = useState(initialValue)
    const [city, setCity] = useState('Pune');
    const [type, setType] = useState('pleasant!!');

    const [blogs,setBlogs] = useState([
        {title: 'DesignPatterns', body: 'Singleton...', author: 'GeekForGeek', id: 1},
        {title: 'Practice Go', body: 'Panic, recover...', author: 'Kim Thompson', id: 2},
        {title: 'React', body: 'Hooks...', author: 'Facebook', id: 3}
    ]);

    const handleClick = (e) =>{
        name = 'Monaco';
        console.log("Clicked from home1 page", name);
    }

    const handleClickAgain = (msg, e) =>{
        console.log(msg, e);
        setCity('Mumbai');
        setType('Humid')
    }

    return (
        <div>
            <p>Home Page</p>
            {/* We cannot give paranthesis in fromt of function, it inc=vokes at same time */}
            <button onClick={handleClick}>Click me</button>
            <button onClick={ () => {
                console.log('Anonymous function call on click event')
            }}>Click me annoy</button>
            {/* <button onClick={ () => {
                handleClickAgain('parameterized function click');
            } }>Click me again</button> */}
            
            {/* one liner annonymous function call  */}
            <button onClick={ (e) => handleClickAgain('parameterized function click', e) }>Click me again</button>

            <p>{name}</p>
            <p>{city}'s climate is {type}</p>

            <h1>List from hooks</h1>

            {blogs.map( (blog) => (
                    <div className="preview" key={blog.id}>
                        <h2>Tile: {blog.title}</h2>
                        <h2>Author: {blog.author}</h2>
                    </div>
            ))}

            
            <h1>Print from Stateless component </h1>

            <div className="stateless">
                <BlogList blogs={blogs} title={"All Blogs"} />
                <p id="filterPara">Use of filter</p>
                <BlogList blogs={blogs.filter((blog) => blog.author === 'Facebook')} title={"Facebook blogs"} />
            </div>

        </div>
    );
}

export default Home;