function objectKeys<Obj extends Object>(obj: Obj): (keyof Obj)[] {
    return Object.keys(obj) as (keyof Obj)[];
}

export default objectKeys;
