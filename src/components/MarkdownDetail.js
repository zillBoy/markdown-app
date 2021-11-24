import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { wikiApi } from '../utils/Apis'
import { setMarkdownDetail } from '../redux/features/markdownSlice'
import Loader from '../components/Loader'
import Error from '../components/Error'

const MarkdownDetail = () => {
    
    const dispatch = useDispatch()
    const { selectedValue } = useSelector(state => state.result)
    const [data, setData] = useState({})

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    const getMarkdownDetailHandler = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${wikiApi}${selectedValue}`)
            const data = response.data            
            const parsedData = data?.query?.pages
            const key = Object.keys(parsedData)
            
            setData(parsedData[key])
            dispatch(setMarkdownDetail(data))

            if (Number(...key) === -1) {
                setError(true)
                setErrorMessage("No Information Available")
            }

        } catch(err) {
            setError(true)
            if (selectedValue.length === 0) setErrorMessage("please select a value to get the markdown details")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMarkdownDetailHandler()
    }, [])

    return (
        <div>
            {loading ? <Loader /> 
            : error ? <Error errorMessage={errorMessage} /> 
            : Object.keys(data).length !== 0 ?
                <>
                    <h1>Title: {data?.title}</h1>
                    <h3>Page ID: {data?.pageid}</h3>
                    <p>Extract: {data?.extract}</p>
                </> 
            : <p>Currently no data available</p>
            }
        </div>
    )
} 

export default MarkdownDetail
