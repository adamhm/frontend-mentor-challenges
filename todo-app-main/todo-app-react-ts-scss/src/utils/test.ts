function testFunc(module: string) {
    let mod: "dark" | "light" = "dark";
    type x = { [mod]: string };
}

export default testFunc;
