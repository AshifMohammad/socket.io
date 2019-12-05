import React ,{Component} from 'react'
import {subscribeToDrawings} from "./api";


class DrawingList extends Component{
    constructor(props){
        super(props)
        subscribeToDrawings((drawing) =>{
            this.setState(prevState =>({
                drawings: prevState.drawings.concat([drawing])
            }))
        })
        this.state={
            drawings: ["rtdts","TEets","ttt"]

        }
    }


    render(){
        const drawings= this.state.drawings.map(drawing => (<li className="DrawingList">{drawing.name}</li>))
        return( <ul className="DrawingList">
            {drawings}
        </ul>)
    }

}
export default DrawingList;



// export const DrawingForm = () => {
//     const [drawingName, setDrawingName] = useState("")
//     const handleSubmit = e =>{ createDrawing(drawingName); setDrawingName(e.target.value)}
//
//     return (<div className="Form">
//         <form onSubmit={e=>handleSubmit(e)}>
//     <input type="text" value={drawingName} onChange={e=> setDrawingName(e.target.value)}/>
//     <button type="submit" className="Form-drawingInput">
//         Create
//
//     </button>
//         </form>
//     </div>
//     )
// }