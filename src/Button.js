function Button (props) {

    deleteBlog = () => {
        let blg = props.blog;
        
    }

    return(
        <>
            <button type="{props.type}" onClick={deleteBlog}>props.btnName</button>
        </>
    );
}

export default Button;