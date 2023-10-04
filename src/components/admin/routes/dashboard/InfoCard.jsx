import React from "react";
import styled from "styled-components";

const InfoCard = ({ titleText, subTitleText, icon, value, iconBg }) => {
  return (
    <Container>
      <div className="top">
        <div className="top_left">
          <span className="title">{titleText}</span>
          <span>{subTitleText}</span>
        </div>
        <div className="top_right" style={{ background: iconBg }}>
          {icon}
        </div>
      </div>

      <div className="bottom">
        <span>{value}</span>
      </div>
    </Container>
  );
};

export default InfoCard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.8rem;
  font-size: 1.3rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    .top_left {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .title {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--text-primary);
      }
    }
    .top_right {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 2.5rem;
      }
    }
  }

  .bottom {
    span {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
    }
  }
`;
