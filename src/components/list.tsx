type Props = {
    list: string[];
}

export function List({list}: Props){
    return (
        <ul>
            {list.map(element => <li key={element}>{element}</li>)}
        </ul>
    )
}