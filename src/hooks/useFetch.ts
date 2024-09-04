import { useEffect, useState } from "react"
import { UserType } from "../types/UserType"
import axios from "axios"

const useFetch = (URL: string) => {

    const [data, setData] = useState<UserType[]>([])
    const [singleData, setSingleData] = useState<UserType>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL)
                const data = response.data
                setData(data.users)
                setSingleData(data)
            } catch (error: any) {
                console.log(error)
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [URL])

    return {data, loading, error, singleData}
}

export default useFetch