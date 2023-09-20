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
  margin-bottom: 1.5rem;
  label {
    color: var(--text-secondary);
    font-size: 1.3rem;
  }
  input {
    color: var(--text-secondary);
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
    margin-top: 0.5rem;
    border: none;
    outline: none;
    &:focus {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      color: #000;
    }
    &::placeholder {
      font-size: 1.3rem;
    }
  }
`;
