const React = require('react')
const Def = require('./default')

let buttons = (data) =>{
    return(
        <>
            {
                data.categories.reverse().map(c => {
                    if (c.name == 'none'){
                        return(
                            c.games.map(g => {
                                return(
                                    <div id = 'Chunk'>
                                        <h3>{g.name}</h3>
                                        <p>{g.subtitle}</p>
                                        <a href={`/game/${g.id}`}>
                                            <button>Play</button>
                                        </a>
                                    </div>
                                )
                            })
                        )
                    }
                    else {
                        return(
                            <div id = 'Chunk'>
                                <h2>{c.name}</h2>
                                <p>{c.description}</p>
                                {c.games.map(g => {
                                    return(
                                        <div id='SubChunk'>
                                            <h3>{g.name}</h3>
                                            <p>{g.subtitle}</p>
                                            <a href={`/game/${g.id}`}>
                                                <button>Play</button>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

function home (data) {
    return (
        <Def>
            <main>
                <div id='Header'>
                    <div id='WebsiteInfo'>
                        <h1>Chess-Like Games</h1>
                        <p>Welcome, here are a couple of games that are like Chess, including Chess.</p>
                    </div>
                </div>
                {buttons(data)}
            </main>
        </Def>
    )
}
module.exports = home