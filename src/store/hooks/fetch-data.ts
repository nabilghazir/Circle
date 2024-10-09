import { useEffect, useState } from "react"

interface FetchDataProps {
    url: string
}

export function FetchData<T>({ url }: FetchDataProps) {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        fetch(url)
            .then((value) => value.json())
            .then((data) => setData(data));

        return () => { };
    }, [url]);

    return { data };
}