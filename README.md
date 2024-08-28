# Bokregister repetitionsuppgift

## Kort sammanfattning

---

Applikationen använder sig av React med React-router-dom för att hantera routing. Listar upp några roliga saker med
applikationen under:

- Använder sig av `prefers-color-scheme` i css för att ändra bakgrunden efter vad användaren föredrar i browsern dark/light.
- Css `clamp` för att få text responsiv, men att texten även har en minimum och maximum storlek.
- Native input `pattern` som med hjälp av regex gör att inputen måste vara 3 nummer- 10 nummer långt och i exakt lika format.

## För att köra applikationen

---

1. Clona ner repositoriet: 
    ```bash
    git clone https://github.com/adrianbodin/School-Bokregister
    ```

2. Navigera in i src mappen
    ```bash
    cd School-Bokregister
    cd src
    ```

3. Installera dependencies och skapa node_modules lokalt:
    ```bash
    npm install
    ```

4. Kör igång dev servern:
    ```bash
    npm run dev
    ```