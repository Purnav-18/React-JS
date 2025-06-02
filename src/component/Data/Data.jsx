import axios from "axios"
import { createContext, useEffect } from "react"
import { useState } from "react"
export const authProvider = createContext()

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')
    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')
    const [show, setShow] = useState(false);
    const [filtered, setFiltered] = useState("all");
    const [searchTerm, setSearchTerm] = useState('');


    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true);
       
    }

    async function getData() {
        try {
            const res = await axios.get('https://674994e4868020296631b471.mockapi.io/people')
            setState(res.data)
        } catch (error) {
            console.log('error in getData')
        }
    }

    const deleted = async (id) => {
        try {
            const res = await axios.delete(`https://674994e4868020296631b471.mockapi.io/people/${id}`)
            getData()
           
        } catch (error) {
            console.log(`error in deleted`)
        }
    }

    const addData = (e) => {
        try {
            e.preventDefault()
            axios.post('https://674994e4868020296631b471.mockapi.io/people', { name: name, email: email, image: image, status: status, role: role, team: team })
            setName("");
            setEmail("");
            setImage("");
            setStatus("");
            setRole("");
            setTeam("");
            navigate("/directory");
            getData()

        } catch (error) {
            console.log(`error in addData`)
        }
    }

    const filters = state.filter((items) => {
        const searchTermLower = searchTerm.toLowerCase();
        const matchesSearch =
            items.name.toLowerCase().includes(searchTermLower) ||
            items.email.toLowerCase().includes(searchTermLower) ||
            items.status.toLowerCase().includes(searchTermLower) ||
            items.role.toLowerCase().includes(searchTermLower) ||
            items.team.toLowerCase().includes(searchTermLower);

        const matchesCategory =
            filtered === "all" ||
            items.status === filtered ||
            items.role === filtered ||
            items.team === filtered
        return matchesSearch && matchesCategory
    });

    useEffect(() => {
        getData()
    }, [])

    return (
        <authProvider.Provider value={{ setFiltered, filters, setSearchTerm, deleted, addData, name, setName, email, setEmail, image, setImage, status, setStatus, role, setRole, team, setTeam, show, setShow, handleClose, handleShow }}>
            {children}
        </authProvider.Provider>
    )
}