import { useField } from "formik";
import styled from "styled-components";
import ValidationError from "../validationUtils/ValidationError";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <InputGroup>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <ValidationError message={meta.error} />}
    </InputGroup>
  );
};

export default TextInput;

const InputGroup = styled.div`
  margin-bottom: 2rem;
  label {
    color: var(--text-secondary);
    font-size: 1.3rem;
  }
  input {
    background: #fff;
    color: var(--text-secondary);
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
    margin-top: 0.5rem;
    border: none;
    outline: none;
    font-size: 1.3rem;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    &:focus {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

      color: #000;
    }
    &::placeholder {
      font-size: 1.3rem;
    }
  }
`;
