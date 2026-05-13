function skillBadge({name, level}) {

    return(
        <>
            <div>
                <h3>{name}</h3>

                <p>Level : {level}</p>

                {level >= 90 && <span>🚀</span>}
            </div>
        </>
    )
}

export default skillBadge