// MovesComponent.js
import React, { useState } from "react";

const MovesComponent = ({ moves }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const movesPerPage = 10;
  if (!moves) {
    return <div>No moves available</div>;
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the index of the first and last move to be displayed on the current page
  const indexOfLastMove = currentPage * movesPerPage;
  const indexOfFirstMove = indexOfLastMove - movesPerPage;
  const currentMoves = moves.slice(indexOfFirstMove, indexOfLastMove);

  return (
    <div>
      <h1 className="cardData">Moves</h1>
      {currentMoves.map((move, index) => (
        <div key={index}>
          <p>Move Name: {move.move.name}</p>
        </div>
      ))}
      {/* Pagination controls */}
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(moves.length / movesPerPage) },
          (_, i) => (
            <div
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button onClick={() => paginate(i + 1)} className="page-link">
                {i + 1}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MovesComponent;
