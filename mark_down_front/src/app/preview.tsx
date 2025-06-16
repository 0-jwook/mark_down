import styled from "@emotion/styled";

type Props ={
  content: string
  title?: boolean
}


function parseMarkdown(text: string) {
  if (typeof text !== "string") {
    console.warn("text is not a string:", text);
    text = String(text || "");
  }
  return text
    // 제목 (# ~ ######)
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // 굵게 (**text** or __text__)
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // 기울임 (*text* or _text_)
    .replace(/_(.*?)_/gim, '<em>$1</em>')
    // 코드 (`code`)
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // 링크 [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>')
    .replace(/@([^@]+)@/gim, '<span class="spin">$1</span>')
    .replace(/\^([^^]+)\^/gim, '<span class="bounce">$1</span>')
    // 줄바꿈
    .replace(/\n/g, '<br />');


}


function Preview({ content, title }: Props) {
  const html : string = parseMarkdown(content);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <StyledPreview isTitle={title} dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  );
}

const StyledPreview = styled.div<{ isTitle?: boolean }>`
    height: ${({ isTitle }) => (isTitle ? "15vh" : "85vh")};
    width: 50vw;
    background-color: red;
    font-size: ${({ isTitle }) => (isTitle ? "30px" : "15px")};
    font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};
    //border: none;
    //resize: none;
    //outline: none;
    text-align: left;
    line-height: normal;
    padding: ${({ isTitle }) => (isTitle ? "60px 42px 0px " : "15px 42px")};
    font-family: "pretendard";
    overflow: scroll;
    overflow-x: hidden;
    
    
    //애니메이션
    
    .spin {
        display: inline-block;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .bounce {
        display: inline-block;  
        animation: bounce 0.01s ease-in-out infinite alternate;
    }

    @keyframes bounce {
        0% { transform: translateY(5px); }
        100% { transform: translateY(-5px); }
`;

export default Preview;



