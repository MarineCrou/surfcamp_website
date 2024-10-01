import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ArticleParagraph = ({ paragraph }) => {
  return (
    <ReactMarkdown className="copy article-paragraph">
      {paragraph.paragraph}
    </ReactMarkdown>
  );
};

export default ArticleParagraph;
