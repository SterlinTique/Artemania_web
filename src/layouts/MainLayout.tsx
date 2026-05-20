import { Outlet } from "react-router-dom";

import MainHeader from "../components/layout/MainHeader";
import Sidebar from "../components/layout/Sidebar";
import MobileBottomNav from "../components/layout/MobileBottomNav";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-[#F8F5F1] flex">
            
            {/* Sidebar Desktop */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">

                <MainHeader />

                <main className="flex-1 p-5 pb-24 lg:pb-5 overflow-y-auto">
                    <Outlet />
                </main>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <MobileBottomNav />
                </div>

            </div>
        </div>
    );
}