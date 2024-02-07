const WorkoutDetails = ({workoutEach}) => {
const handleClick = async() => {
    const response = await fetch('/api/workout/' + workoutEach._id, {
        method:'DELETE',

    }) // concating id means we are taking a particular id from this nedpoint 

    const json = await response.json()

    if(response.ok){
        
    }

    }

    return ( 
        <div className="workout-details">
        <h4>{workoutEach.title}</h4>
        <p><strong> Load (kg): </strong>{workoutEach.load}</p>
        <p><strong>Reps: </strong>{workoutEach.reps}</p>
        <p>{workoutEach.createdAt}</p>
        <span onClick={handleClick}> Delete </span>
        </div>
     );
}
 
export default WorkoutDetails;