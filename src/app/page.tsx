export default function Home() {
    return (
        <div className="flex flex-col h-100 justify-center items-center flex-grow gap-10 max-w-[1200px] w-[90%] m-auto">
            <h1 className="text-6xl font-bold">套件筆記</h1>
            <a href="/blog" className="px-6 py-2 font-bold text-lg text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 transition-all">
                部落格
            </a>
        </div>
    );
}
