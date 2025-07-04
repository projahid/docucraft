
import ContentDisplay from "../../../components/ContextDisplay";
import { getDocuments } from "../../../lib/documents";
import { getDocumentsByAuthor } from "../../../lib/utils/doc-util";

const AuthorPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const matchedDocs = getDocumentsByAuthor(docs, name);
    return <ContentDisplay id={matchedDocs[0].id} />;
};

export default AuthorPage;