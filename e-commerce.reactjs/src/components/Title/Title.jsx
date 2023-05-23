export const Title = ({ name, title, text }) => {

    return (
        
        <div>
            
            <h1 className="navBar">{name}</h1>

            <h2 className="title">{title}</h2>

            <p className="text">{text}</p>
            
        </div>

    )  
}

