type Props = {
    children: React.ReactNode
}

export function Test({children}: Props) {
    return(
        <p>{children}</p>    
    )
}