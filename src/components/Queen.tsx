const Queen = ({ size = "24", className = "" }) => {
  return (
    <span role="img" aria-label="queen">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 122.88 107.76"
        style={{ enableBackground: "new 0 0 122.88 107.76" }}
        xml:space="preserve"
        width={size}
        height={size}
        className={`queens-icon-svg ${className}`}
      >
        <style type="text/css">{`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}</style>
        <g>
          <path
            className="st0"
            d="M21.13,83.86h80.25l12.54-34.73c0.65,0.21,1.35,0.32,2.07,0.32c3.8,0,6.89-3.08,6.89-6.89 c0-3.8-3.08-6.89-6.89-6.89c-3.8,0-6.89,3.08-6.89,6.89c0,1.5,0.48,2.88,1.29,4.01l-7.12,5.86c-9.97,8.2-16.22,4.4-14.27-8.34 l1.1-7.17c0.38,0.07,0.78,0.1,1.18,0.1c3.8,0,6.89-3.08,6.89-6.89c0-3.8-3.08-6.89-6.89-6.89c-3.8,0-6.89,3.08-6.89,6.89 c0,2.17,1.01,4.11,2.58,5.37l-1.71,2.7c-8.38,12.58-14.56,7.76-17.03-4.67l-4.41-20.31c2.47-1.05,4.21-3.49,4.21-6.35 c0-3.8-3.08-6.89-6.89-6.89c-3.8,0-6.89,3.08-6.89,6.89c0,3.18,2.15,5.85,5.07,6.65L56.46,25.1c-2.48,10.61-5.45,31.75-18.88,13.73 l-2.19-2.98c1.73-1.25,2.86-3.29,2.86-5.59c0-3.8-3.08-6.89-6.89-6.89c-3.8,0-6.89,3.08-6.89,6.89c0,3.8,3.08,6.89,6.89,6.89 c0.53,0,1.05-0.06,1.55-0.18l0.46,4.68c0.9,6.39,2.05,15.04-5.29,14.63c-3.64-0.2-5.01-1.44-7.79-3.42l-7.94-5.63 c0.89-1.16,1.42-2.61,1.42-4.19c0-3.8-3.08-6.89-6.89-6.89c-3.8,0-6.89,3.08-6.89,6.89s3.08,6.89,6.89,6.89 c0.9,0,1.75-0.17,2.54-0.48L21.13,83.86L21.13,83.86z M21.07,93.47h80.51v14.29H21.07V93.47L21.07,93.47z"
          />
        </g>
      </svg>
    </span>
  );
};

const QueenOld = ({ size = "24", className = "" }) => {
  return (
    <span role="img" aria-label="queen">
      <svg
        className={`queens-icon-svg ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
        <path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" />
        <path d="m20 9-3 9" />
        <path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" />
        <path d="M7 18 4 9" />
        <circle cx="12" cy="4" r="2" />
        <circle cx="20" cy="7" r="2" />
        <circle cx="4" cy="7" r="2" />
      </svg>
    </span>
  );
};

export default Queen;
