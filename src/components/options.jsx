
function Options ({onFeedback , onReset, sumFeedback}){
    return (
    <div className="divButton">
        <button onClick={()=>onFeedback('good')}>Good </button>
        <button onClick={()=>onFeedback('neutral')}>Neutral</button>
        <button onClick={()=>onFeedback('bad')}>Bad</button>
            
            {sumFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>     
)
}
export default Options