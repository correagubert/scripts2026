import axios from 'axios'
import { useState, useEffect } from 'react'
import {FaFileMedicalAlt} from 'react-icons/fa'

const ExamsCounter = () => {
    const [examCount, setExamCount] = useState(0)

    useEffect(() => {
        const fetchExams = async() => {
            try {
                const response = await axios.get("http://localhost:3000/exams");
                setExamCount(response.data.length)
            } catch(error) {
                console.error("Erro ao obter os dados dos exames.", error)
            }
        }
        fetchExams()
    }, [])

  return (
    <div className='bg-white shadow rounded-lg p-6 flex flex-col items-center w-60'>
        <h2 className='text-xl font-bold flex items-center gap-2'>
            <FaFileMedicalAlt className='text-blue-600' />{examCount}
        </h2>
        <p className='text-gray-600 mt-2'>Exames</p>
    </div>
  )
}

export default ExamsCounter