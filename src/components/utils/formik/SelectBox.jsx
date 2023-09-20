import { useField } from "formik";
import styled from "styled-components";

const SelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <SelectContainer>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">
          <span>i</span> {meta.error}
        </div>
      ) : null}
    </SelectContainer>
  );
};

export default SelectBox;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  label {
    font-size: 1.3rem;
    color: var(--text-secondary);
  }
  select {
    background: #fff;
    color: var(--text-secondary);
    margin: 0.5rem 0 1rem;
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
    border: none;
    outline: none;
    font-size: 1.2rem;

    &:focus {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  }
  .error {
    font-size: 1.1rem;
    padding-bottom: 0.5rem;
    span {
      font-style: italic;
      color: tomato;
      margin-right: 0.3rem;
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
`;
