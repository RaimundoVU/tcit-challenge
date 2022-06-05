import { deleteThunk, fetchThunk } from "../redux/reducers/reducer";
import { connect, useDispatch } from 'react-redux'
import { useEffect } from "react";

import AddPost from './AddPost';
import FilterTable from "./FilterTable";

const PostTable = ({ ...props }) => {
	const dispatch = useDispatch();
  const { entities, status, filter, filteredItems} = props;
  
  const onClick = (postId) => {
    dispatch(deleteThunk(postId))
  }

	useEffect(() => {
		dispatch(fetchThunk());
	}, [dispatch]);

  if ( status.loading === 'pending' ) { 
    return (
      <p>CARGANDO</p>
    )
  }

  if (status.loading === 'succeded'){
      return (
        <div className="flex w-full h-screen">
          <div className="flex w-full items-center justify-center">
            <div className="w-11/12 max-w-[700px] justify-center items-center py-10 px-5 bg-white border-2 rounded-md flex flex-col">
            <FilterTable />
              <table className="mt-8">
                <thead className="bg-cyan-600">
                  <tr className="">
                    <th className="text-white font-normal pl-2 pr-10">Nombre</th>
                    <th className="text-white font-normal pl-2 pr-5">Descripcion</th>
                    <th className="text-white font-normal pl-2 pr-5">Accion</th>
                  </tr>
                </thead>
                <tbody>
              { filteredItems.map(el => 
                <tr key={el.id} className="bg-gray-100">
                  <td className="pl-2 pr-5">{el.name}</td>
                  <td className="pl-2 pr-5">{el.description}</td>
                  <td  className="pl-2 pr-5">
                    <button 
                      className="text-white border bg-cyan-600 hover:bg-cyan-500 rounded-md"
                      type="button"
                      onClick={()=> onClick(el.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
                
              ) }
                </tbody>
              </table>
              <AddPost />
            </div>
          </div>
        </div>
      )
  }

  }




const mapStateToProps = ( { posts } ) => {
  const { entities, status, filter } = posts;
  return {
    entities, status, filter,
    filteredItems: [...entities.filter(el => el.name.toLowerCase().startsWith(filter.toLowerCase()))]
  }
}

export default connect(mapStateToProps)(PostTable);
