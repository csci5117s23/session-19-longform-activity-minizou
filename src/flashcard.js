import { useState } from 'react';

export default function FlashCard(props) {

  const [flip, setFlip] = useState(false);

  return (
    <div className="Card" onClick={() => setFlip(!flip)}>
      <span>
        {flip ? props.back : props.front}
      </span>
    </div>
  );
}
