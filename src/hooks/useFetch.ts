import { useEffect, useState } from "react"
import { User } from "../types/User"
import axios from "axios"

const useFetch = (URL: string) => {

    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get(URL)
            const data = await response.data
            console.log(data)
        }

        fetchData()

    }, [URL])

    return {data, loading, error}


}

export default useFetch