import React from 'react';
import './style.css'

function page() {
  return (
    <div>
        <div className="button-section">
          <StartButton isStarted={isStarted} setIsStarted={setIsStarted} />
          <SubmitButton isStarted={isStarted} isSubmitted={isSubmitted} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      
    </div>
  )
}

export default page
