type Props = {
    list: string[];
}

export function List({list}: Props){
    return (
        <ul>
            {list.map(element => <li>{element}</li>)}
        </ul>
    )
}