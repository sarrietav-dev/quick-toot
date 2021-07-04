import React from 'react';

interface FormButtonProps {
  icon: 'globe' | 'paperclip' | 'tasks';
  disabled: boolean;
}

export const FormButton = ({ icon, disabled }: FormButtonProps) => {
  return (
    <button className="btn btn--form" disabled={disabled}>
      <i className={`fa fa-fw fa-${icon}`}></i>
    </button>
  );
};
