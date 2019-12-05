import React ,{Component} from 'react'
import {createDrawing} from "./api";




class DrawingForm extends Component{

    state={
        drawingName:""

    }

    handleSubmit = e =>{
        e.preventDefault()
        this.setState({drawingName:e.target.value})
        createDrawing(this.state.drawingName)
    }

    render(){

        return(<div className="Form">
            <form onSubmit={e=>this.handleSubmit(e)}>
                <input type="text"
                       value={this.state.drawingName}
                       onChange={e=>  this.setState({drawingName:e.target.value})}
                       placeholder="Drawing Name"
                       className="Form-drawingInput"
                       required
                />
                <button
                    type="submit"
                    className="Form-drawingInput">
                    Create

                </button>
            </form>
        </div>)
    }

}
export default DrawingForm;



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