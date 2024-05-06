import React from 'react';

const SubContent = ({ toggleSubContentColor, subContent }) => {
  return (
    <>
      <div
        className={`${
          toggleSubContentColor ? 'subContent--1' : 'subContent--2'
        }  border-gray-500  border rounded-sm my-4`}
      >
        <h1>{subContent.title}</h1>
        <h3>{subContent.content}</h3>
      </div>
    </>
  );
};

export default SubContent;
