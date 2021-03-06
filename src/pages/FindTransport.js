import { useEffect } from "react"
import TransportCard from "../components/TransportCard"
import transportParticipant from "../tempData/transportParticipants"


export default function FindTransport({ setUser }) {

    useEffect(() => setUser("par"))

    const transportList = transportParticipant.map((item) =>
        <TransportCard key={item.tid} par={item} />)

    return (

        <div className="find-transport">
            <h3>Here you can find an avaliable seat:</h3>
            <section className="find-cards">{transportList}</section>
        </div>
    )
}