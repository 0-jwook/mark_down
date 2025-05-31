import remarkBreaks from 'remark-breaks';
import ReactMarkdown from 'react-markdown';
import styled from "@emotion/styled";

type Props ={
  content: string
}

function Preview({ content }: Props) {
  return (
    <div className="prose max-w-none p-4 overflow-y-auto">
      <StyledPreview>
        <ReactMarkdown remarkPlugins={[remarkBreaks]} >{content}</ReactMarkdown>
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