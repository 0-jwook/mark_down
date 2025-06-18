import styled from "@emotion/styled";
type StyledpProps = {
  isBold?: boolean;
  isItalic?: boolean;
  onClick?: () => void;
};
type HelpbarProps = {
  onFormat: (label: string) => void;
};

function Helpbar({ onFormat }: HelpbarProps) {
  const handleClick = (label: string) => {
    onFormat?.(label);  // 상위로 이벤트 전달
  };

  return (
    <Bar>
      <Styledp onClick={()=>handleClick("h1")}>H1</Styledp>
      <Styledp onClick={()=>handleClick("h2")}>H2</Styledp>
      <Styledp onClick={()=>handleClick("h3")}>H3</Styledp>
      <Styledp onClick={()=>handleClick("h4")}>H4</Styledp>
      <img src="/Line 4.svg" alt="l" />
      <Styledp isBold onClick={()=>handleClick("bold")}>B</Styledp>
      <Styledp isItalic isBold onClick={()=>handleClick("italic")}>L</Styledp>
      <img src="/Line 4.svg" alt="l" />
    </Bar>
  )
}

const Bar = styled.div`
display: flex;
    width: 50vw;
    height: 5vh;
    align-items: center;
    padding: 5px 38px;
    background-color: beige;
`

const Styledp = styled.p<StyledpProps>`
font-size: 14px;
    padding: 5px 7px;
    font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
    font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
`


export default Helpbar;