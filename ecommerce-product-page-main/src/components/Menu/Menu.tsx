import menu from "./menu.json";

function Menu() {
    return (
        <>
            {menu.items.map((item) => (
                <li
                    key={item.name}
                    className="ml-8 flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-orange hover:text-black"
                >
                    <a href={item.target}>{item.name}</a>
                </li>
            ))}
        </>
    );
}

export default Menu;
