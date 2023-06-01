export const Title = ({ brand, title, text }) => {

    return (
        
        <div>
            
            <h1 className="navBar">{brand}</h1>

            <h2 className="title">{title}</h2>

            <p className="text">{text}</p>
            
        </div>

    )  
}

