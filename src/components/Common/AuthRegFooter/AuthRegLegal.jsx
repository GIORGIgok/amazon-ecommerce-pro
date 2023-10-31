// footer for Authorization & Registration pages
import styled from "styled-components";

const LEGAL_MAIN_CONTAINER = styled.footer`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: inherit;
  background: rgb(250,250,250);
  background: -moz-radial-gradient(circle, rgba(250,250,250,1) 0%, rgba(248,248,248,1) 33%);
  background: -webkit-radial-gradient(circle, rgba(250,250,250,1) 0%, rgba(248,248,248,1) 33%);
  background: radial-gradient(circle, rgba(250,250,250,1) 0%, rgba(248,248,248,1) 33%);

  .legal-upper-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.125rem;
    /* gap 18px */
    margin-top: 0.94rem;
    /* mt 15px */
    width: 100%;
    height: 1.75rem;
    /* height 28px */
    text-align: center;
  }
  #legal-upper-txt {
    font-size: 0.69rem;
    /* fs 11px */
    text-decoration: none;
    color: #0066c0;
    &:hover {
      color: #c45500;
      text-decoration: underline;
    }
  }
  .legal-lower-container {
    width: 100%;
    height: 1.75rem;
    /* height 28px */
    text-align: center;
    font-size: 0.69rem;
    /* fs 11px */
    color: #555;
    padding-top: 0.313rem;
    /* pt 5px */
    margin-right: 1.75rem;
    /* mr 28px */
  }
`;

const Divider = styled.div`
  height: 0.063rem;
  /* 1px */
  background: linear-gradient(to right, transparent 0%, #ccc 50%, #ccc 50%, transparent 100%);
`;

// It's a common footer for Authorization & Registration pages.
const AuthRegFooter = () => {
  return (
    <LEGAL_MAIN_CONTAINER>
      <Divider />
      <div className="legal-upper-container">
        <a id="legal-upper-txt" href=".">Conditions of Use</a>
        <a id="legal-upper-txt" href=".">Privacy Notice</a>
        <a id="legal-upper-txt" href=".">Help</a>
      </div>
      <div className="legal-lower-container">
      © 1996-2023, Amazon.com, Inc. or its affiliates 
      </div>
    </LEGAL_MAIN_CONTAINER>
  );
};

export default AuthRegFooter;
