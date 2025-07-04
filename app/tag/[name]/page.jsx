
import ContentDisplay from "../../../components/ContextDisplay";
import { getDocuments } from "../../../lib/documents";
import { getDocumentsByTag } from "../../../lib/utils/doc-util";

const TagPage = ({params: {name}}) => {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByTag(docs, name);

    return (
      <ContentDisplay id={matchedDocuments[0].id} />
    )
  }

  export default TagPage