import React from 'react';

const DeleteButton = ({ onDelete }) => {
  return (
    <button
      className="delete-button"
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
