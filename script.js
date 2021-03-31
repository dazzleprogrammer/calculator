*{
    box-sizing: border-box;
}

:root {
    --border-radius: 5px;
    --border-width: 1px;
    --light-grey: #e2e0e0;
    --blue: #7f6cfc;
    --orange: #ffc877;
    --red: #c14444;
}

#calculator {
    width: 45%;
    height: 80%;
    min-width: 300px;
    min-height: 400px;
    background-color: var(--light-grey);
    margin: auto;
    margin-top: 80px;
    border: 2px solid var(--light-grey);
    border-radius: var(--border-radius);
    padding: 10px;
}

#calculator h1 {
    background-color: black;
    color: white;
    text-transform: uppercase;
    text-align: center;
    padding: 10px;
}

#display-container {
    font-size: 2.8rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: var(--blue);
    width: 100%;
    height: 20%;
    min-height: 100px;
    border-radius: var(--border-radius);
    background-color: whitesmoke;
    margin-bottom: 10px;
}

#display-container p {
    margin: 0.5rem;
    vertical-align: text-bottom;
}

#buttons-container {
    width: 100%;
    height: 60%;
    min-height: 300px;
    border: var(--border-width) solid var(--light-grey);
    border-radius: var(--border-radius);
    background-color: var(--light-grey);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

.button {
    width: 25%;
    height: 20%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: var(--border-width) solid var(--light-grey);
    background-color: white;
    font-size: 1.8rem;
    cursor: pointer;
    transition-duration: 1s;
}

.button:hover {
    background-color: var(--orange);
}

.red {
    background-color: var(--red);
    color: white;
}

#button-zero {
    width: 50%;
}

