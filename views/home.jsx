const React = require('react')

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
        <html lang='en'>
            <head>
                <meta charset="UTF-8"/>
                <meta name="description" content="Chess-like games"/>
                <meta name="keywords" content="Chess, Chess-like, Latrunculi, Tafl, Tablut, Brandubh, Tawlbwrdd"/>
                <meta name="author" content="Ryan Wendell"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=1000"></meta>
                <title>Chess-like</title>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            <body>
                <main>
                    <div id='Header'>
                        <div id='WebsiteInfo'>
                            <h1>Chess-Like Games</h1>
                            <p>Welcome, here are a couple of games that are like Chess, including Chess.</p>
                        </div>
                    </div>
                    {buttons(data)}
                </main>

            </body>
        </html>
    )
}
module.exports = home