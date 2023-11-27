import styled from "styled-components";
import Title from "../utils/reUseableComponents/Title";
import useCalculatePrice from "../utils/customHooks/useCalculatePrice";
import Currency from "../utils/reUseableComponents/Currency";

const Summary = ({ title, variant }) => {
  const { productPrice, shippingCost, tax, total } = useCalculatePrice();

  return (
    <Container>
      <div className="content">
        <Title
          variant={variant}
          text={title}
          style={{ marginBottom: "1rem" }}
        />
        <dl>
          <dt>Product price</dt>
          <dd>
            <Currency price={productPrice} />
          </dd>
        </dl>

        <dl>
          <dt>Shipping cost</dt>
          <dd>
            <Currency price={shippingCost} />
          </dd>
        </dl>

        <dl>
          <dt>Tax</dt>
          <dd>
            <Currency price={tax} />
          </dd>
        </dl>

        <div className="hr"></div>

        <dl className="total">
          <dt>Total</dt>
          <dd>
            <Currency price={total} />
          </dd>
        </dl>
      </div>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    box-shadow: var(--shadow-3);
    border-radius: 0.5rem;

    dl {
      display: flex;
      justify-content: space-between;
      gap: 5rem;
    }

    dd,
    dt {
      font-size: 1.4rem;
      color: var(--text-primary);
      font-weight: 500;
    }

    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;

      dd,
      dt {
        font-weight: 600;
      }
      dd {
        font-size: 2rem;
      }
    }

    .hr {
      box-shadow: var(--shadow-3);
      width: 100%;
      margin: 1rem 0;
    }

    .buy_now {
      width: 100%;
      border: none;
      background: tomato;
      padding: 1rem 0;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      color: #fff;
      cursor: pointer;
      margin: 2rem 0 1rem;
    }
  }
`;
