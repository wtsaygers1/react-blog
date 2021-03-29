import React from "react";

function Splash (props) {
    return (
        <div className="container">
        <div className="row">
          <div className="column">
            {/* here is where the logo will go */}
            <button
              type="button"
              className="position-absolute bottom-0 start-50 translate-middle-x"
              onClick={props.click}
            >
              Click to Enter
          </button>
          </div>
        </div>
      </div>
    );
}

export default Splash;