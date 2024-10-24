function Topics({data}) {

    return (
        <>
            {data.map((item, idx) =>
            <li key={idx}>
                <h3>{item.href}</h3>
            </li>)}
        </>
    )
}
export default Topics;