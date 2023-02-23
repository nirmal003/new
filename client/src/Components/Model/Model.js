import { createPortal } from "react-dom";
import "./Model.css";

function Model({ show, close }) {
  if (!show) return null;

  return createPortal(
    <div class="overlay">
      <div class="model">
        <h2>This is model</h2>
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.getElementById("model")
  );
}

export default Model;
