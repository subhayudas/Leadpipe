import SignOut from "@/components/signout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-lg font-medium text-center">
                    Welcome to the dashboard
                </h1>
                <div className="flex items-center justify-center gap-4">
                    <Link href="/">
                        <Button variant="outline">
                            Home
                        </Button>
                    </Link>
                    <SignOut />
                </div>
            </div>
        </div>
    )
};

export default DashboardPage
