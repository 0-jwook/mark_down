import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (value: string) => void;
  titleValue: string;
  titleOnChange: (value: string) => void;
}

function Editer({titleValue, value, onChange} : Props) {
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <StyledTextArea isTitle value={titleValue} ></StyledTextArea>
      <StyledTextArea value={value} onChange={e => onChange(e.target.value)}>
      </StyledTextArea>
    </div>
  )
}

const StyledTextArea = styled.textarea<{ isTitle?: boolean }>`
    width: 50vw;
    height: ${({ isTitle }) => (isTitle ? "15vh" : "85vh")};
    background-color: ${({ isTitle }) => (isTitle ? "transparent" : "blue")};
    font-size: ${({ isTitle }) => (isTitle ? "30px" : "15px")};
    font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};
    border: none;
    resize: none;
    outline: none;
    text-align: left;
    line-height: ${({ isTitle }) => (isTitle ? "15vh" : "normal")};
    padding: ${({ isTitle }) => (isTitle ? "0px" : "10px")};
`;


export default Editer;