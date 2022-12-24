import {useParams,useNavigate} from "react-router-dom"
export default function Change({id}){
    const navigate = useNavigate();
    return (<button onClick={()=>navigate(`/ok/${id}`)}>change</button>)
}