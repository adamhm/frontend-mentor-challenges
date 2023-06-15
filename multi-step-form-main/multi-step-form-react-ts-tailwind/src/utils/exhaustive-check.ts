function exhaustiveCheck(value: never): never {
    throw new Error(`Unreachable: ${value}`);
}

export default exhaustiveCheck;
