import { useState } from "react"


export default function BountyForm(props) {
    /*
        props for initial state:
        {
            name: "",
            wantedFor: "",
            client: "",
            ship: "",
            reward: 0,
            captured: false,
            lastSeen: ""
        }
    */
    const [form, setForm] = useState(props.initialState)
    return (
        <div>
            <h2>New Bounty:</h2>
            <form
            className="bountyCard"
                onSubmit={(e) => props.handleSubmit(e, form)}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        placeholder="enter target's name"
                        id="name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="wantedFor">Wanted For: </label>
                    <input
                        type="text"
                        placeholder="what are their crimes?"
                        id="wantedFor"
                        value={form.wantedFor}
                        onChange={e => setForm({ ...form, wantedFor: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="client">Client: </label>
                    <input
                        type="text"
                        placeholder="who's the client"
                        id="client"
                        value={form.client}
                        onChange={e => setForm({ ...form, client: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="ship">Ship: </label>
                    <input
                        type="text"
                        placeholder="what ship are they on?"
                        id="ship"
                        value={form.ship}
                        onChange={e => setForm({ ...form, ship: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="reward">Reward: </label>
                    <input
                        type="number"
                        placeholder="enter reward amount"
                        id="reward"
                        value={form.reward}
                        onChange={e => setForm({ ...form, reward: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="captured">Is Captured: </label>
                    <input
                        type="checkbox"
                        id="captured"
                        value={form.captured}
                        onChange={() => setForm({ ...form, captured: !form.captured })}
                    />
                </div>
                <div>
                    <label htmlFor="lastSeen">Last Seen: </label>
                    <input
                        type="text"
                        placeholder="where were they last?"
                        id="lastSeen"
                        value={form.lastSeen}
                        onChange={e => setForm({ ...form, lastSeen: e.target.value })}
                    />
                </div>

                <button type="submit">Submit</button>

            </form >

            <button onClick={props.handleCancelClick}>Cancel</button>
        </div >
    )
}