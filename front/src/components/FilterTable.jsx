import { useDispatch } from "react-redux"
import { useState } from "react";
const FilterTable = () => {
  const [search, setSearch] = useState('')
	const dispatch = useDispatch();

  const submit = () => {
    dispatch({type: 'filter/search', payload: search})
  }

  const onChange = (e) => {
    setSearch(e.target.value);
    dispatch({type: 'filter/search', payload: e.target.value})
  }

  return(
		<div className="flex w-full items-center justify-center mt-auto">
			<form onSubmit={submit}>
        <input className="border border-black rounded-md w-6/12" value={search} onChange={(e) => onChange(e)}/>
				<button className="text-white border bg-cyan-600 hover:bg-cyan-500 w-6/12 rounded-md" type="button" onClick={submit}>Buscar </button>
			</form>
    </div>

  )
}

export default FilterTable;

