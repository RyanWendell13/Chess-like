const React = require('react')

function Def (html){
    return(
        <html lang='en'>
            <head>
                <meta charset="UTF-8"/>
                <meta name="description" content="Chess-like games"/>
                <meta name="keywords" content="Chess, Chess-like, Latrunculi, Tafl, Tablut, Brandubh, Tawlbwrdd"/>
                <meta name="author" content="Ryan Wendell"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
                <meta name="viewport" content="width=1000"></meta>
                <title>Chess-like</title>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
