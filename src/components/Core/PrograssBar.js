import React from "react";
import styles from '@/styles/component/progressbar.module.css';

const PrograssBar = () => {
  return (
      <div className={styles.css_hxzfxw}>
        <div
          className={styles.circle_progress_wrap}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 100 200 200"
            style={{transform: "rotate(-90deg)", overflow: "visible"}}
          >
            <linearGradient
              id="grd_yr9kq6mayc58"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              gradientTransform="rotate(90, .5, .5)"
            >
              <stop offset="0" stopColor="rgba(5, 205, 153, 0)"></stop>
              <stop offset="100" stopColor="#05CD99"></stop>
            </linearGradient>
             <circle
              cx="200"
              cy="200"
              r="92.5"
              stroke="#060B28"
              strokeWidth="15"
              fill="#060B28"
            ></circle>
            <circle
              cx="200"
              cy="200"
              r="92.5"
              fill="none"
              strokeWidth="15"
              strokeDasharray="581.1946409141117"
              strokeDashoffset="174.3583922742335"
              strokeLinecap="round"
              stroke="url(#grd_yr9kq6mayc58)"
              style={{transition: "stroke-dashoffset 400ms ease 0s"}}
            ></circle>
          </svg>
          <div
            className={styles.circle_progress_inner}
          >
            <div>
              <div className={styles.css_u6v8er}
            >
                <svg
                  viewBox="0 0 14 24"
                  focusable="false"
                  // multiple css module not working ?
                  // className={[styles.chakra_icon, styles.css_1htje7g]}
                  style={{
                    width: "14px",
                    height: "22px",
                    display: "inline-block",
                    lineHeight: "1em",
                    flexShrink: "0",
                    color: "currentcolor",
                    verticalAlign: "middle",
                    marginBottom: "8px",
                }}
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
                <p className={[styles.css_1xfsbov]}
                 >68%</p>
                <p className={[styles.css_m4w0oi]}
                >Current load</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.css_1yfpgry}>
          <p className={[styles.css_k4urfs]}>0h 58 min</p>
          <p className={[styles.css_jhncyh]}>Time to full charge</p>
        </div>
      </div>
  );
};

export default PrograssBar;
