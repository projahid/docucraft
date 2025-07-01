
import ContentDisplay from "../../../../components/ContextDisplay"

const SubContentPage = ({params: {subContentId}}) => {
    return (
        <ContentDisplay id={subContentId} />
    )
  }

  export default SubContentPage