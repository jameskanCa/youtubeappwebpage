class MetricCalculation {
    static PercentageVideoCompleted(sessions) {
        let finishCount = 0;
        let unfinishedCount = 0;
        sessions.map((session) => {
            session.finishedVideo? finishCount++ : unfinishedCount++;
        });
    
        return finishCount/(finishCount + unfinishedCount);
    }
    
}
export default MetricCalculation;