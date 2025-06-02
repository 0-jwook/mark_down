import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (value: string) => void;
}

function Editer({ value, onChange} : Props) {
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      {/*<StyledTextArea isTitle></StyledTextArea>*/}
      <StyledTextArea value={value} onChange={e => onChange(e.target.value)}>
      </StyledTextArea>
    </div>
  )
}

const StyledTextArea = styled.textarea<{ isTitle?: boolean }>`
    width: 50vw;
    height: 100vh;
    background-color: blue;
    font-size: ${({ isTitle }) => (isTitle ? "30px" : "15px")};
    font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};
    border: none;
    resize: none;
    outline: none;
    text-align: left;
    line-height: ${({ isTitle }) => (isTitle ? "15vh" : "normal")};
    padding: 10px;
    font-family: "pretendard";
`;


export default Editer;