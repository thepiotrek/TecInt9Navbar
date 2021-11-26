import TransportCard from "../components/TransportCard"
import transportParticipant from "../tempData/transportParticipants"


export default function FindTransport() {

    const transportList = transportParticipant.map((item) => <TransportCard key={item.tid} par={item} />)

    return (

        <div className="General">

            <h3>
                Transportation page!
            </h3>

            <h3>Here you can find an avaliable seat:</h3>
            <section className="cardShow">{transportList}</section>

        </div>
    )
}