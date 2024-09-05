# Bokregister repetitionsuppgift

## Kort sammanfattning


#### Frontenden använder sig av React med React-router-dom för att hantera routing. Listar upp några roliga saker medfrontenden under:

- Använder sig av `prefers-color-scheme` i css för att ändra bakgrunden efter vad användaren föredrar i browsern dark/light.
- Css `clamp` för att få text responsiv, men att texten även har en minimum och maximum storlek.
- Native input `pattern` som med hjälp av regex gör att inputen måste vara 3 nummer- 10 nummer långt och i exakt lika format.

#### Backenden använder sig av asp.net core web api med en sqlite databas för smidighetens skull.

## För att köra applikationen enklast

1. Clona ner repositoriet och navigera in i mappen: 
    ```bash
    git clone https://github.com/adrianbodin/School-Bokregister
    cd School-Bokregister
    ```
2. Kör Make kommando för att starta både apiet och frontenden samtidigt.
    ```bash
    make dev
    ```
> [!NOTE]
> Du måste ha make installerat för att kunna köra kommandot.


## För att köra applikationen andra sättet

1. Clona ner repositoriet: 
    ```bash
    git clone https://github.com/adrianbodin/School-Bokregister
    ```

2. Navigera in i src mappen
    ```bash
    cd School-Bokregister
    cd src
    cd frontend
    ```

3. Installera dependencies och skapa node_modules lokalt:
    ```bash
    npm install
    ```

4. Kör igång dev servern:
    ```bash
    npm run dev
    ```
