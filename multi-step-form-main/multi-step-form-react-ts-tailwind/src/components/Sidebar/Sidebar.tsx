import { StepPanel } from "@components";

function Sidebar() {
    return (
        <section className="h-[172px] w-full shrink-0 bg-mobile bg-no-repeat md:h-[568px] md:w-[274px] md:bg-desktop">
            <StepPanel />
        </section>
    );
}

export default Sidebar;
