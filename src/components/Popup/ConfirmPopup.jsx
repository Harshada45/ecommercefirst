import React from 'react'

const ConfirmPopup = ({ onConfirm, onClose,closeButton = true  }) => {

    
  return (
   <>
   <div className='confirm-popup'>
    <p className='heading text-center'>
      Are you sure want to remove this?
    </p>
      <div className='confirm-btns d-flex '>
        <div className='delete-btn' onClick={onConfirm}>Delete</div>
        <div className='cancel-btn' onClick={onClose}>Cancel</div>
      </div>
   </div>
   </>
  )
}

export default ConfirmPopup