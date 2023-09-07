import React, {useState} from 'react';
import '.../App.css';

export default function Hover() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="card-column">
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            Hover over me!
          </button>
          {isShown && (
            <div>
              I'll appear when you hover over the button.
            </div>
          )}
        </div>
      );
    }







