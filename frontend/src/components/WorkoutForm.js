import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const workout = {title, load,reps}

        const  response = await fetch('/api/workout', {
            method:'POST',
            body:JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        const json = await response.json()
        if(!response.ok){
            setError(json.error)

        }

        if(response.ok){
            // after adding a workout, for 2nd one all the values canbe empty string as below:
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added', json)
        }
    }
    return ( 

        <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new workout!</h3>

        <label> Excersize Title: </label>
        <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value = {title} // if we reset form then it will be clean or empty 
        />

        <label> load (in kg): </label>
        <input 
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value = {load} // if we reset form then it will be clean or empty 
        />

        <label> Reps: </label>
        <input 
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value = {reps} // if we reset form then it will be clean or empty 
        />
        <button>Add workout</button>
        {error && <div className="error">{error}</div>}
        </form>

     );
}
 
export default WorkoutForm;