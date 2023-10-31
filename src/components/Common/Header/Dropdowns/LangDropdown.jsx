import styled from "styled-components";
import usa_flag from "../../../../assets/imgs/usa-flag.png";

const LANG_DROPDOWN = styled.div`
  position: absolute;
  z-index: 2;
  top: 2.813rem;
  right: -10.05rem;
  background-color: #ffffff;
  border-radius: 0.188rem;
  cursor: auto;
  width: 14.375rem;
  height: 28.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #252525;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: -0.375rem;
    left: 3.25rem;
    background-color: #ffffff;
    width: 0.938rem;
    height: 0.938rem;
    transform: rotate(45deg);
  }
`;

const INNER_CONTAINER = styled.div`
  width: 95%;
  height: 98%;
  background-color: #ffffff;
  /* Change language */
  .change-lang {
    margin-top: 2px;
    margin-bottom: 5px;
    padding-left: 5px;
    font-size: 14px;
    /* learn more */
    a {
      margin-left: 7px;
      font-size: 12px;
      color: #007185;
      text-decoration: none;
    }
    a:hover {
      color: #c7511f;
      text-decoration: underline;
    }
  }

  form {
    .empty-gray-line {
      margin-block: 4px;
      float: right;
      width: 90%;
      height: 1px;
      background-color: #eeeeee;
    }
    label {
      line-height: 2;
      font-size: 14px;
      margin-left: 2px;
    }
    input {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 16px;
      width: 16px;
      border: 1px solid gray;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      position: relative;
    }
    input:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      vertical-align: center;
      width: 8px;
      height: 8px;
      background-color: #e87121;
      border-radius: 50%;
    }
    input:hover + label,
    label:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #c7511f;
    }
  }
  /* Change currency */
  .change-currency {
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    margin-block: 4px;
    padding-top: 9px;
    padding-left: 5px;
    font-size: 14px;
    display: block;
    a {
      margin-left: 7px;
      font-size: 12px;
      color: #007185;
      text-decoration: none;
    }
    p {
      display: flex;
      justify-content: space-between;
      margin-right: 7px;
      /* Change */
      a {
        font-size: 13px;
      }
    }
    a:hover {
      color: #c7511f;
      text-decoration: underline;
    }
  }
  /* you are shopping on amazon */
  .shopping-on-amazon {
    padding-left: 5px;
    margin-block: 0px;
    font-size: 14px;
    #usa-flag {
      width: 10%;
      vertical-align: middle;
    }
  }
  .change-c-r {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
  #change-country-region {
    color: #007185;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: #c7511f;
      text-decoration: underline;
    }
  }
`;

const LangDropdown = () => {
  return (
    <LANG_DROPDOWN>
      <INNER_CONTAINER>
        <p className="change-lang">
          Change language
          <a href="/" alt="learn more">
            Learn more
          </a>
        </p>
        <form>
          <input type="radio" id="en" name="language" value="EN" />
          <label id="lang-en" htmlFor="en">
            English - EN
          </label>
          <br />
          <div className="empty-gray-line"></div>
          <input type="radio" id="es" name="language" value="ES" />
          <label htmlFor="es">español</label>
          <br />

          <input type="radio" id="ar" name="language" value="AR" />
          <label htmlFor="ar">العربية</label>
          <br />

          <input type="radio" id="de" name="language" value="DE" />
          <label htmlFor="de">Deutsch</label>
          <br />

          <input type="radio" id="he" name="language" value="HE" />
          <label htmlFor="he">עברית</label>
          <br />

          <input type="radio" id="ko" name="language" value="KO" />
          <label htmlFor="ko">한국어</label>
          <br />

          <input type="radio" id="pt" name="language" value="PT" />
          <label htmlFor="pt">português</label>
          <br />

          <input type="radio" id="zh1" name="language" value="ZH" />
          <label htmlFor="zh1">中文 (简体)</label>
          <br />

          <input type="radio" id="zh2" name="language" value="ZH" />
          <label htmlFor="zh2">中文 (繁體)</label>
          <br />
        </form>
        <span className="change-currency">
          Change currency
          <a href="/" alt="learn more">
            Learn more
          </a>
          <p>
            $ - USD - US Dollar <a href="/">Change</a>
          </p>
        </span>
        <p className="shopping-on-amazon">
          <img id="usa-flag" src={usa_flag} alt="usa" />
          You are shopping on amazon.com
        </p>
        <div className="change-c-r">
          <a id="change-country-region" href="/">
            Change country/region.
          </a>
        </div>
      </INNER_CONTAINER>
    </LANG_DROPDOWN>
  );
};

export default LangDropdown;
