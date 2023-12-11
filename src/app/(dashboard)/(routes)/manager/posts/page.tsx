import { Button } from "@/components/ui/button";
import Link from "next/link";

const PostsPage = () => {
    return ( 
        <div className="p-6">
            <Link href="/manager/create">
                <Button>新建文章</Button>
            </Link>
        </div>
     );
}
 
export default PostsPage;