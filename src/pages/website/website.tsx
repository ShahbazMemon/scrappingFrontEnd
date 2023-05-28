import React, { useState } from "react";
import Dropdown from "../../components/Core/Form/FormItems/Dropdown";
import styles from "../../styles/website.module.css";
import PrograssBar from "../../components/Core/PrograssBar";

const Website = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [websites, setWebsites] = useState([
    {
      value: "Clutch",
      link: "https://clutch.co/",
    },
    {
      value: "def",
      link: "....",
    },
    {
      value: "ghi",
      link: "....",
    },
    {
      value: "jkl",
      link: "....",
    },
  ]);

  const handleChange = (e: any) => {
    const result = e.target.value;
    setSelectedOption(result);
    console.log("e >>", result);
  };

  const onSubmit = () => {};

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.title}>Websites Scrapping</h1>
      </div>
      <div className={styles.platform_div_css}>
        <div>
          <form>
            <div>
              <div style={{ minHeight: "60px" }}>
                <p className={styles.platform_label}>Select Website</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Dropdown
                  item={websites}
                  handleChange={handleChange}
                  selectedOption={selectedOption}
                />
                <div style={{ alignSelf: "center" }}>
                  <button type="submit" className={styles.submit}>
                    Start
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.progress_container}>
        <div className={styles.progress_container_head}>
          <p className="chakra-text css-1rtfj6f">Queues Progress</p>
        </div>
        <div className={styles.progress_inside_container}>
          <div className={styles.platform_div_css}>
            <div style={{ minHeight: "60px" }}>
              <p className={styles.platform_label}>Select Website</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
              <PrograssBar />
              </div>
              <div style={{ alignSelf: "center" }}>
                <button type="submit" className={styles.submit}>
                  Start
                </button>
              </div>
            </div>
          </div>

          <div className={styles.form_div_css}>
            <div>
              <form>
                <div>
                  <div style={{ minHeight: "60px" }}>
                    <p>Select Website</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Dropdown
                      item={websites}
                      handleChange={handleChange}
                      selectedOption={selectedOption}
                    />
                    <div style={{ alignSelf: "center" }}>
                      <button type="submit" className={styles.submit}>
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.form_div_css}>
            <div>
              <form>
                <div>
                  <div style={{ minHeight: "60px" }}>
                    <p>Select Website</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Dropdown
                      item={websites}
                      handleChange={handleChange}
                      selectedOption={selectedOption}
                    />
                    <div style={{ alignSelf: "center" }}>
                      <button type="submit" className={styles.submit}>
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
