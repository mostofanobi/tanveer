const GooeyFilter = () => (
  <svg
    width='0'
    height='0'
    className='absolute hidden'
    colorInterpolationFilters='sRGB'
  >
    <defs>
      <filter id='goo'>
        <feGaussianBlur in='SourceGraphic' stdDeviation='6' result='blur' />
        <feColorMatrix
          in='blur'
          mode='matrix'
          values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
          result='goo'
        />
        <feComposite in='SourceGraphic' in2='goo' operator='atop' />
      </filter>
    </defs>
  </svg>
);

export default GooeyFilter;
