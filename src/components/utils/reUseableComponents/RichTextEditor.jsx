import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import ValidationError from "../validationUtils/ValidationError";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  // [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const RichTextEditor = ({
  label,
  richText,
  setRichText,
  richTextError,
  setRichTextError,
}) => {
  return (
    <RichTextEditorContainer>
      <label>{label}</label>
      <div className="quill_container">
        <ReactQuill
          theme="snow"
          value={richText}
          onChange={setRichText}
          modules={{ toolbar: toolbarOptions }}
          onBlur={() => {
            !richText && setRichTextError("Description is required.");
          }}
        />
      </div>
      {richTextError && <ValidationError message={richTextError} />}
    </RichTextEditorContainer>
  );
};

export default RichTextEditor;

const RichTextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;

  label {
    font-size: 1.3rem;
    color: var(--text-secondary);
  }

  .quill_container {
    border-radius: 2px;
    font-size: 1.3rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    .ql-snow {
      border: none;
    }

    .ql-toolbar {
      border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
    }

    .error {
      font-size: 1.1rem;
      padding: 1rem 0;
      span {
        font-style: italic;
        color: tomato;
        margin-right: 0.3rem;
        font-weight: 700;
        font-size: 1.1rem;
      }
    }
  }
`;
