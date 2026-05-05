const Nav=()=>{
    return(
        <nav style= {{backgroundColor:"violet",height:"90Px"}}>
            <ol
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "30px",
                height: "30px"
            }}>
            

                <li style={ListStylings.list}>Home</li>
                <li style={ListStylings.list}>Log</li>
                <li style={ListStylings.list}>Register</li>
                <li style={ListStylings.list}>About</li>
            </ol>
        </nav>
        
    )
}

const ListStylings={
    list:{
        backgroundColor:"blue",
        padding:"10px 20 px",
        fontSize:"22px",
        fontstyle:"italic",
        fontWeight:"bold",
        listStyle:"none",
        borderRadius:"10px",
        boxShadow:"2px 5px 6px red",
        textShadow:"1px 4px 5px black"

    },
    ol:{
        display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "30px",
                height: "30px"
    }

}
export default Nav;
