import React from "react";

const PrograssBar = () => {
  return (
    <div>
      <div className="css-hxzfxw">
        <div
          className="circle-progress-wrap "
          style="height: 200px; width: 200px; position: relative;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 100 200 200"
            style="transform: rotate(-90deg); overflow: visible;"
          >
            <linearGradient
              id="grd_yr9kq6mayc58"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              gradientTransform="rotate(90, .5, .5)"
            >
              <stop offset="0" stop-color="rgba(5, 205, 153, 0)"></stop>
              <stop offset="100" stop-color="#05CD99"></stop>
            </linearGradient>
            <circle
              cx="200"
              cy="200"
              r="92.5"
              stroke="#060B28"
              stroke-width="15"
              fill="#060B28"
            ></circle>
            <circle
              cx="200"
              cy="200"
              r="92.5"
              fill="none"
              stroke-width="15"
              stroke-dasharray="581.1946409141117"
              stroke-dashoffset="174.3583922742335"
              stroke-linecap="round"
              stroke="url(#grd_yr9kq6mayc58)"
              style="transition: stroke-dashoffset 400ms ease 0s;"
            ></circle>
          </svg>
          <div
            className="circle-progress-inner"
            style="position: absolute; inset: 0px; display: flex; align-items: center; justify-content: center;"
          >
            <div>
              <div className="css-u6v8er">
                <svg
                  viewBox="0 0 14 24"
                  focusable="false"
                  className="chakra-icon css-1htje7g"
                >
                  <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.74999 23.25H4.49999L5.74999 14.5H0.424988C0.424988 14.5 5.02499 6.425 8.24999 0.75H9.49999L8.24999 9.5H13.6L5.74999 23.25Z"
                      fill="#09AD8F"
                    ></path>
                  </svg>
                </svg>
                <p className="chakra-text css-1xfsbov">68%</p>
                <p className="chakra-text css-m4w0oi">Current load</p>
              </div>
            </div>
          </div>
        </div>
        <div className="css-1yfpgry">
          <p className="chakra-text css-k4urfs">0h 58 min</p>
          <p className="chakra-text css-jhncyh">Time to full charge</p>
        </div>
      </div>
    </div>
  );
};

export default PrograssBar;
