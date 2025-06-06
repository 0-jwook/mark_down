import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (value: string) => void;
  title?: boolean;
}

function Editer({ value, onChange, title} : Props) {
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <StyledTextArea isTitle={title} value={value} onChange={e => onChange(e.target.value)}>
      </StyledTextArea>
    </div>
  )
}

const StyledTextArea = styled.textarea<{ isTitle?: boolean }>`
    width: 50vw;
    height: ${({ isTitle }) => (isTitle ? "15vh" : "80vh")};
    background-color: blue;
    font-size: ${({ isTitle }) => (isTitle ? "30px" : "15px")};
    font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};
    border: none;
    resize: none;
    outline: none;
    text-align: left;
    line-height: normal;
    padding: ${({ isTitle }) => (isTitle ? "28px 42px 0px " : "15px 42px")};
    font-family: "pretendard";
`;


export default Editer;