function Options (onFeedback){
    return (
    <div className="divButton">
        <button onClick={onFeedback}>Good </button>
        <button onClick={onFeedback}>Neutral</button>
        <button onClick={onFeedback}>Bad</button>
       <button > Reset</button>
    </div>     
)
}
export default Options