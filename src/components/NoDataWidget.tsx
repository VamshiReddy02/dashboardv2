// components/NoDataWidget.tsx
import WidgetWrapper from "./WidgetWrapper"

interface NoDataWidgetProps {
  id: number
  title: string
  message: string
}

const NoDataWidget = ({ id, title, message }: NoDataWidgetProps) => {
  return (
    <WidgetWrapper id={id} title={title}>
      <div className="flex flex-col items-center justify-center h-32 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l4 4m0 0l4-4m-4 4V4" />
        </svg>
        <p>{message}</p>
      </div>
    </WidgetWrapper>
  )
}

export default NoDataWidget
