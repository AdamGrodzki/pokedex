import React from "react";

function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className="buttonsPages">
            {gotoPrevPage && (
                <button className="buttonPrev" onClick={gotoPrevPage}>
                    Previous
                </button>
            )}
            {gotoNextPage && (
                <button className="buttonNext" onClick={gotoNextPage}>
                    Next1
                </button>
            )}
        </div>
    );
}

export default Pagination;