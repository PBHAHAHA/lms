import { Input } from "@/components/ui/input"

const PageSearch = () => {
  return (
    <div className="flex-1 mr-5 max-w-lg items-center">
      <Input type="search" placeholder="搜索文章" />
    </div>
  )
}

export default PageSearch