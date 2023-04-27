import "./App.css";
import Header from "./Header";
import Meme from "./Meme";

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}

export default App;

/*
export default function App() {
const [isGoingOut, setIsgoingOut] = React.useState(true)
const changeState = () =>
setIsgoingOut(!isGoingOut)

  return (
      <div className="state">
          <h1 className="state--title">Do I feel like going out tonight?</h1>
          <div onClick={changeState} className="state--value">
              <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
          </div>
      </div>
  )
} */

// ------------------------------------------------------------------
/*
function App() {
   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        setThingsArray([...thingsArray, newThingText])
        // Or 'setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}'
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
} */

// -------------------------------------------------------------
// The parent
/*
import Star from "./Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} /> 
                    // This is the important part that actually handles the clicking of favorites icon 
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

// And the child 

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick} // It is the same as in here
        />
    )
} */

// -------------------------------------------------------------------------------------
// Lifting props
// App.js
/*
import Header from "./Header"
import Body from "./Body"

export default function App() {
    const [user, setUser] = React.useState("Joe")
    
    return (
        <main>
            <Header user={user} />
            <Body user={user} />
        </main>
    )
}

// Header.js
export default function Header(props) {
  return (
      <header>
          <p>Current user: {props.user}</p>
      </header>
  )
}

// Body.js
export default function Body(props) {
  return (
      <section>
          <h1>Welcome back, {props.user}!</h1>
      </section>
  )
}*/
