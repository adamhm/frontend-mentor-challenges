import { ContentPanel, Sidebar } from "@components";

function App() {
    return (
        <article className="flex h-[600px] w-[940px] gap-4 rounded-2xl bg-white p-4 shadow-xl">
            <Sidebar />
            <ContentPanel />
        </article>
    );
}

export default App;
