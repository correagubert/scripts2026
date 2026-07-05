import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

// Importação do Componente Modal
import Modal from "../../components/Modal/Modal.jsx"

const ExamForm = () => {
    // Variáveis e Estados
    const [searchTerm, setSearchTerm] = useState('')
    const [patients, setPatients] = useState([])
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSaving, setIsSaving] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        type: "",
        laboratory: "",
        documentURL: "",
        results: "",
    })

    // Busca de Pacientes
    const fetchPatients = async () => {
        try {
            const response = await axios.get("http://localhost:3000/patients")
            setPatients(response.data)
        } catch (error) {
            console.error("Erro ao obter dados.", error)
        }
    }

    useEffect(() => {
        fetchPatients()
    }, [])

    // Funções Auxiliares

    const handleSearchChange = (e) => setSearchTerm(e.target.value)

    const filteredPatients = patients.filter(
        (patient) =>
            patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.id.toString().includes(searchTerm) ||
            patient.healthInsurance.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.allergies.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.phone.toString().includes(searchTerm)
    )

    const handleSelectPatient = (patient) => {
        setSelectedPatient(patient)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedPatient(null)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const resetForm = () => {
        setFormData({
            reason: "",
            date: "",
            time: "",
            description: "",
            medication: "",
            dosagePrecaution: "",
        })
    }

    // Submit

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedPatient) return;

        try {
            setIsSaving(true)

            const dataToSave = {
                patientId: selectedPatient.id,
                ...formData
            }

            await axios.post("http://localhost:3000/exams", dataToSave)
            toast.success("Exame cadastrado com sucesso!", {
                autoClose: 3000,
                hideProgressBar: true
            })

            resetForm()
            handleCloseModal()
        } catch (error) {
            toast.error("Erro ao cadastrar exame!", {
                autoClose: 3000,
                hideProgressBar: true
            })
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <section className='p-6 text-gray-800'>
            {/* Campo de Busca*/}
            <div className='mb-6'>
                <label htmlFor='name' className='block text-sm font-semibold mb-2'>Buscar paciente para cadastrar exame</label>
                <input
                    id='name'
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder='Digite o nome ou registro do paciente...'
                    className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                />
            </div>

            {/* Lista de Pacientes */}

            <ul className='space-y-3'>
                {filteredPatients.map((patient) => (
                    <li
                        key={patient.id}
                        className='p-4 border rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-50 transition'
                    >
                        <div>
                            <p className='text-sm'>
                                <strong>Registro: </strong>{patient.id}
                            </p>
                            <p className='text-sm'>
                                <strong>Nome: </strong>{patient.fullName}
                            </p>
                            <p className='text-sm'>
                                <strong>Convênio: </strong>{patient.healthInsurance}
                            </p>
                        </div>
                        <button
                            onClick={() => handleSelectPatient(patient)}
                            className='bg-cyan-700 text-white px-3 py-2 rounded-lg hover:bg-cyan-600 transition'
                        >Selecionar</button>
                    </li>
                ))}
            </ul>

            {/* Modal de cadastro da consulta*/}

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedPatient && (
                    <>
                        <h2 className='text-lg font-bold mb-4 text-cyan-700'>
                            Cadastrar exame para {selectedPatient.fullName}
                        </h2>

                        {/* Dados básicos */}
                        <div className='mb-4 text-sm text-gray-700'>
                            <p>
                                <strong>Email: </strong>{selectedPatient.email}
                            </p>
                            <p>
                                <strong>Telefone: </strong>{selectedPatient.phone}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label className='block text-sm font-medium mb-1' htmlFor='name'>Exame</label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full border p-2 rounded-lg focus:ring-cyan-600 outline-none' />
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-sm font-medium mb-1' htmlFor='date'>Data</label>
                                    <input
                                        type='date'
                                        name='date'
                                        id='date'
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full border p-2 rounded-lg focus:ring-cyan-600 outline-none' />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium mb-1' htmlFor='time'>Horário</label>
                                    <input
                                        type='time'
                                        name='time'
                                        id='time'
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full border p-2 rounded-lg focus:ring-cyan-600 outline-none' />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium mb-1' htmlFor='type'>Tipo de Exame</label>
                                    <input
                                    type='text'
                                    name='type'
                                    id='type'
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full border p-2 rounded-lg focus:ring-cyan-600 outline-none' />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium mb-1' htmlFor='laboratory'>Laboratório</label>
                                    <input
                                    type='text'
                                    name='laboratory'
                                    id='laboratory'
                                    value={formData.laboratory}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full border p-2 rounded-lg focus:ring-cyan-600 outline-none' />
                                </div>
                            </div>
                                <div>
                                    <label className='block text-sm font-medium mb-1' htmlFor='documentURL'>Link para o Documento</label>
                                    <input
                                        type='documentURL'
                                        name='documentURL'
                                        id='documentURL'
                                        value={formData.documentURL}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full border p-2 rounded-lg focus:ring-cyan-600 outline-none' />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium mb-1' htmlFor='results'>Resultados</label>
                                    <textarea
                                        name='results'
                                        id='results'
                                        value={formData.results}
                                        onChange={handleInputChange}
                                        rows='3'
                                        required
                                        className='w-full border p-2 rounded-lg focus:ring-cyan-600 outline-none' />
                                </div>

                                {/* Botões */}
                                <div className='flex justify-end gap-3 pt-4'>
                                    <button
                                    type='button'
                                    onClick={handleCloseModal}
                                    className='px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition cursor-pointer'
                                    >Cancelar</button>

                                    <button
                                    type='submit'
                                    disabled={isSaving}
                                    className='px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50 transition cursor-pointer'
                                    >{isSaving ? "Salvando...":"Salvar"}</button>
                                </div>
                        </form>
                    </>
                )}
            </Modal>
        </section>
    )
}

export default ExamForm

// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •

// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •

// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •
// • • • - - - • • •