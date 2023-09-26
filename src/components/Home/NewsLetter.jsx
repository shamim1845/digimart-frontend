import styled from "styled-components";
import Button from "@mui/material/Button";
import { styled as btn } from "@mui/material/styles";

const NewsLetter = () => {
  const AddToCart = btn(Button)({
    backgroundColor: "tomato",
    color: "#000",
    borderRadius: "0 4px 4px 0",
    fontSize: "1.4rem",
    height: "100%",
    padding: "0 2.5rem",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#585555",
      color: "#fff",
    },

    "@media screen and (max-width: 576px)": {
      borderRadius: "4px",
      width: "100%",
    },
  });

  return (
    <Container>
      <Content>
        <div className="newsletter">
          <h5>Up To 25% Off</h5>
          <h2>
            Receive a 10% discount <br /> on your purchases
          </h2>
          <br />
          <br />
          <p>Get E-mail updates about our latest shop and special offers.</p>
          <div className="input_box">
            <input type="text" placeholder="Enter your email address..." />
            <AddToCart variant="contained">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
            </AddToCart>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url(https://res.cloudinary.com/dewq5eyuf/image/upload/v1691832586/digimart/utils/pqa93l3uwvn0gp8s6yuk.jpg);
  background-position: center center !important;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10rem 0;

  @media screen and (max-width: 768px) {
    background-position: left center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  .newsletter {
    width: 100%;
    max-width: 80rem;
    padding: 0 3rem;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      padding: 0 2rem;
    }

    h5 {
      background-color: tomato;
      color: var(--text-primary);
      width: max-content;
      padding: 0.5rem !important;
    }
    h2 {
      font-size: 4rem;
      font-weight: 700;
      color: var(--text-primary);

      @media screen and (max-width: 768px) {
        font-size: 4rem;
      }
      @media screen and (max-width: 576px) {
        font-size: 3rem;
      }
    }
    p {
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }
    .input_box {
      height: 4rem;
      overflow: hidden;
      @media screen and (max-width: 576px) {
        height: 9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
      }
      input {
        height: 100%;
        width: 100%;
        max-width: 35rem;
        padding: 0 1rem;
        margin-right: 0.6rem;
        border: none;
        outline: none;
        border-radius: 4px 0 0 4px;

        @media screen and (max-width: 576px) {
          width: 100%;
          max-width: 100%;
          border-radius: 4px;
        }
      }
    }
  }
`;
