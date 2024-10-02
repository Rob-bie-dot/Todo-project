import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();
        // post data todo api
        // go to the home page
        navigate('/');
    }

    return (
        <div>
            <h1>Add A New Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="enter your todo" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AddTodo;