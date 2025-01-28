export default function Counter() {
    const increase = () => null;
    const decrease = () => null;

    return <>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </>
}