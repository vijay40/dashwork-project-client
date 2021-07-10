import React from 'react';

interface ResultItemProps {
  content: string;
}

const ResultItem = (props: ResultItemProps) => {
  return (
    <li>
      <div className="result-item-wrapper">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="result-item-content">{props.content}</div>
      </div>
    </li>
  );
};

export default ResultItem;
