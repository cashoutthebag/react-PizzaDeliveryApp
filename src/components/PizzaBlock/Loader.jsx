import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Loader() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="310" rx="4" ry="4" width="280" height="26" />
      <rect x="0" y="358" rx="4" ry="4" width="280" height="90" />
    </ContentLoader>
  );
}
