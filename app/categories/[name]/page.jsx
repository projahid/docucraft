

import ContentDisplay from "../../../components/ContextDisplay";
import { getDocuments } from "../../../lib/documents"
import { getDocumentsByCategory } from "../../../lib/utils/doc-util";

const CategoriesPage = ({params: {name}}) => {
    const docs = getDocuments();
    const matchedDocs = getDocumentsByCategory(docs, name);
    return (
        <ContentDisplay id={matchedDocs[0].id} />
    )
  }

  export default CategoriesPage