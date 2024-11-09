import React from "react";

const Header = () => {
    return (
        <>
            <header className="h-[70px] bg-red-400">
                <nav className="h-full flex justify-between items-center px-10">
                    <h2 className="font-bold text-2xl">RRB Exam</h2>
                    <div className="flex justify-between items-center gap-3">
                        <span className="font-bold">Username</span>
                        <img src="./images/logo/logo.png" alt="UserProfile" />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
