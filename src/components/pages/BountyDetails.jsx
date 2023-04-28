import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import BountyForm from "../partials/BountyForm"
import axios from "axios"

export default function BountyDetails() {
    // hold the bounty we are currently looking at
    const [bounty, setBounty] = useState({})
    // is the edit form being shown or now?
    const [showForm, setShowForm] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties/${id}`)
            .then(response => {
                console.log(response.data)
                setBounty(response.data.result)
            })
            .catch(console.warn)
    }, [])

    const handleSubmit = async (e, form) => {
        e.preventDefault()
        console.log(form)
        console.log('updated bounty!')
        try {
            const putResponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}/bounties/${id}`, form)
            console.log('updated bounty response: ', putResponse.data)
            setBounty(putResponse.data.result)
            setShowForm(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/bounties/${id}`)
            // navigate to home page
            navigate("/") // you can supply any react router dom route
        } catch (err) {
            console.log(err)
        }
    }

    const initialState = {
        name: bounty.name,
        wantedFor: bounty.wantedFor,
        client: bounty.client,
        ship: bounty.ship,
        reward: bounty.reward,
        captured: bounty.captured,
        lastSeen: bounty.lastSeen
    }

    const details = (
        <>
            <h1>Details for {bounty.name}</h1>

            <h2>Reward: ${bounty.reward}</h2>

            <p>Wanted for: {bounty.wantedFor}</p>

            <p>Client: {bounty.client}</p>

            <p>Last Seen: {bounty.lastSeen}</p>

            <p>Traveling in: {bounty.ship}</p>

            <p>{bounty.captured ? "Captured" : "Still at Large"}</p>

            <button onClick={handleDeleteClick}> Delete Bounty </button>
        </>
    )

    const form = (
        <>
            <h1>Edit Form for {bounty.name}</h1>

            <BountyForm
                initialState={initialState}
                handleSubmit={handleSubmit}
                handleCancelClick={() => setShowForm(false)}
            />
        </>
    )

    return (
        <div>
            {!showForm && <button onClick={() => setShowForm(true)}>Edit</button>}
            {showForm ? form : details}
        </div>
    )
}