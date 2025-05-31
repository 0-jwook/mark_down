import styled from "@emotion/styled";

type Props ={
  content: string
}


function parseMarkdown(text: string): string {
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
    .replace(/__(.*?)__/gim, '<strong>$1</strong>')
    // 기울임 (*text* or _text_)
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/_(.*?)_/gim, '<em>$1</em>')
    // 코드 (`code`)
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // 링크 [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>')
    // 줄바꿈
    // .replace(/\n$/gim, '<br />');
}


function Preview({ content }: Props) {
  return (
    <div className="prose max-w-none p-4 overflow-y-auto">
      <StyledPreview>
        {parseMarkdown(content)}
      </StyledPreview>
    </div>
  );
}

const StyledPreview = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: red;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
`;

export default Preview;