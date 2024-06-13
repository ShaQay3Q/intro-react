// props always an object
// 1. Make Prop oprional
type Props = {
    variant?: "primary" | "secondary"

    // onClick name is convension
    onClick: () => void
}
// 2. Always destructure your props
// 3. 
// deconstructuring
export function SampleComponent({variant = "primary", onClick}: Props) {
    return (
        <button
            className={`btn btn-${variant}`}
            // function being passed to an attribute
            onClick={onClick}
        >
            Click me!
        </button>
    )
}