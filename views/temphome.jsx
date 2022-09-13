const React = require('react')
function temphome () {
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
                <div id='Popup'>
                    <h1>I am in your home</h1>
                    <a href='/home'>
                        <button> Press to confirm my presence in your home</button>
                    </a>
                </div>
            </body>
        </html>
    )
}
module.exports = temphome