"use client"
export default function ErrorBoundary({error, reset}: {error: Error, reset: () => void}) {
    return (
        <>
            <pre>{error.message}</pre>
            <button onClick={reset}>Reset</button>
        </>
    )
}