import React from "react";

const Header = ({ handleLogout }) => {
    return (
        <>
            <header className="flex-none h-[70px] bg-red-400">
                <nav className="h-full flex justify-between items-center px-3 md:px-10">
                    <h2 className="font-bold text-2xl">RRB Exam</h2>
                    <div className="flex justify-between items-center gap-3">
                        <span className="font-bold">Username</span>
                        <div
                            onClick={handleLogout}
                            className="flex justify-center items-center bg-slate-50 px-3 py-1 rounded-lg cursor-pointer gap-2"
                        >
                            <span>Logout</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                                />
                            </svg>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
