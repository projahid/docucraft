
import ContentDisplay from "../../../components/ContextDisplay"

const ContentPage = ({params: {contentId}}) => {
  return (
    <ContentDisplay id={contentId} />
  )
}

export default ContentPage