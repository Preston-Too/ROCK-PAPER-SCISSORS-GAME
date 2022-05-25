import "./index.css";

const ResultsPage = (props) => {
  const { choicesList, isShow, checkResult, newArray, text, restartGame } =
    props;
  return (
    <div className="GamePageContainer">
      {isShow && (
        <>
        <img src="../images/bg-triangle.svg" alt="" className="triangle"/>
          <button
            className="GameButton"
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <img
              className="GameImage" id="image"
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </button>
          <button
            className="GameButton"
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <img
              className="GameImage" id="image1"
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </button>
          <button
            className="GameButton"
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <img
              className="GameImage" id="image2"
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </button>
        </>
      )}
      {!isShow && (
        <>
          <div className="ResultImageContainer">
            <p className="ResultName">YOU</p>
            <img
              className="GameImage"
              src={newArray[0].imageUrl}
              alt="your choice"
            />
          </div>
          <div className="ResultImageContainer">
            <p className="ResultName">COMPUTER</p>
            <img
              className="GameImage"
              src={newArray[1].imageUrl}
              alt="computer choice"
            />
          </div>
          <div className="ResultImageContainer">
            <p className="ResultText">{text}</p>
            <button
              className="result-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultsPage;
