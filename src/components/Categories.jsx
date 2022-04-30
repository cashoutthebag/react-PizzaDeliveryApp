import React from 'react';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((item, i) => (
            <li
              className={activeCategory === i ? 'active' : ''}
              onClick={() => onClickCategory(i)}
              key={i}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
