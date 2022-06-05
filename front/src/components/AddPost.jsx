import { useState } from "react";
import { useDispatch } from "react-redux";
import {addThunk} from "../redux/reducers/reducer";

const AddPost = () => {

	const dispatch = useDispatch()
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const submit = (e) => {
		if (!name.trim()) { 
      return;
    }
		if (!description.trim()) { 
      return;
    }
    const post = { name: name, description: description}
		dispatch(addThunk(post));
    setName('')
    setDescription('')
	}

	return (
		<div className="flex w-full items-center justify-center mt-8 ">
			<form onSubmit={submit}>
				<input className="border border-black rounded-md w-4/12" value={name} onChange={e => setName(e.target.value)}/>
 	      <input className="border border-black rounded-md w-4/12" value={description} onChange={e => setDescription(e.target.value)}/>
				<button className="text-white border bg-cyan-600 hover:bg-cyan-500 w-4/12 rounded-md" onClick={submit}>Crear </button>
			</form>
		</div>
	)
}

export default AddPost;
