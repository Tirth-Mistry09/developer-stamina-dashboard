function Header() {

    const currentHour = new Date().getHours();

    let greeting = "";

    if(currentHour >= 5 && currentHour <= 11){
        greeting = "Good Morning";
    }

    else if(currentHour >= 12 && currentHour <= 17){
        greeting = "Good Afternoon";
    }

    else{
        greeting = "Good Evening";
    }

    return(
        <>
            <h2>{greeting}, Tirth 👋</h2>
        </>
    )
}

export default Header