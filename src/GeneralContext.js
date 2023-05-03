import React, { createContext, useState } from 'react'
import immo1 from './assets/immo1.jpg'
import { useNavigate } from 'react-router-dom'
export const GeneralContext = createContext()
export const GeneralProvider = ({ children }) => {

    const [users, setUsers] = useState([
        { email: 'client@gmail.com', password: 'client', role: 'client' },
        { email: 'agent@gmail.com', password: 'agent', role: 'agent' },
    ])
    const navigate = useNavigate()
    const register = (e, form) => {
        e.preventDefault();

        if (!users.find(u => u.email === form.email)) {
            setUsers([...users, form])
            alert('your account has created successfully')
            navigate('/value')
        } else {
            alert('you have already an account')
        }

    }
    const [data, setData] = useState([{
        id: 1,
        nom: "Immo",
        local: "Monastir",
        prix: "300",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://ajs-casanova.staticlbi.com/original/images/biens/1/0e4c289642a839dc576533de2b7085d8/photo_b913eb587db53237c8fcabca89959e73.jpg"
    },
    {
        id: 2,
        nom: "Immo",
        local: "Monastir",
        prix: "500",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6ZpUbXANlV8DE-YbNywyAtO9ekhbWVICPbPJXUqQqIQOhEe1NvS-gtoEfimXbRtQACQ&usqp=CAU"
    },
    {
        id: 3,
        nom: "Immo",
        local: "Monastir",
        prix: "500",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://www.plan-immobilier.fr/images/contenu/immeuble_neuf_5.webp"
    },
    {
        id: 4,
        nom: "Immo",
        local: "Monastir",
        prix: "500",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6ZpUbXANlV8DE-YbNywyAtO9ekhbWVICPbPJXUqQqIQOhEe1NvS-gtoEfimXbRtQACQ&usqp=CAU"
    },
    {
        id: 5,
        nom: "Immo",
        local: "Monastir",
        prix: "500",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFjSQaQS7tni1hdghNCbftaItPoCM8aOAOP3hW6YoHffIX87P1nVdri_8KdmZGh0SxOU&usqp=CAU"
    },
    {
        id: 6,
        nom: "Immo",
        local: "Monastir",
        prix: "500",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6ZpUbXANlV8DE-YbNywyAtO9ekhbWVICPbPJXUqQqIQOhEe1NvS-gtoEfimXbRtQACQ&usqp=CAU"
    },
    {
        id: 7,
        nom: "Immo",
        local: "Monastir",
        prix: "500",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://www.menzili.tn/upload/photos/2018/06/22/19/45/9696pqd253.jpg"
    },
    {
        id: 8,
        nom: "Immo",
        local: "Monastir",
        prix: "500",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://ajs-casanova.staticlbi.com/original/images/biens/1/0e4c289642a839dc576533de2b7085d8/photo_b913eb587db53237c8fcabca89959e73.jpg"
    }
    ])
    const [editedAnnonce, setAnnonce] = useState()

    const send = (e, form) => {
        console.log(form)
        e.preventDefault();
        if (form.id) {
            // modification
            setData(data.map(old => old.id == form.id ? form : old))
            setAnnonce()
        } else {
            // ajout
            setData([{ ...form, id: data.length + 1 }, ...data])

        }
        console.log(data)

    }
    const remove = (annonce) => {
        console.log('remove', annonce)
        setData(data.filter((x) => x.id !== annonce.id))
    }

    const edit = (annonce) => {
        console.log('edit', annonce)
        setAnnonce(annonce)
    }
    return (
        <GeneralContext.Provider value={{ data, editedAnnonce, users, send, remove, edit, register }}>
            {children}
        </GeneralContext.Provider>
    )
}
