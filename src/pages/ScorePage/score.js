import './index.css'

const ScorePage = (props) => {
  const { score } = props;
  return (
      <div className="ScoreContainer">
        <div className="ScoreNameDiv">
          <div className="ScoreName">
            <h1>ROCK</h1><br />
            <h1>PAPER</h1><br />
            <h1>SCISSORS</h1>
          </div>
        </div>
        <div className="ScoreBody">
          <p className="ScoreHead">Score</p>
          <p className="ScoreResult">{score}</p>
        </div>
      </div>
  );
};

export default ScorePage;
