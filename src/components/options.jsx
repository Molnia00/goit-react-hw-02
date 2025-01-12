
function Options ({onFeedback , onReset}){
    return (
    <div className="divButton">
        <button onClick={()=>onFeedback('good')}>Good </button>
        <button onClick={()=>onFeedback('neutral')}>Neutral</button>
        <button onClick={()=>onFeedback('bad')}>Bad</button>
       <button onClick={()=>onReset()}> Reset</button>
    </div>     
)
}
export default Options