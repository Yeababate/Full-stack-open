sequenceDiagram
    participant U as User
    participant B as Browser
    participant S as Server

    U->>B: Writes a note and clicks "Save"
    note right of B: Form submit event triggered

    B->>S: HTTP POST /new_note<br>with note data
    note right of S: Server stores the new note

    S-->>B: HTTP 302 Redirect to /notes
    note right of B: Browser follows redirect

    B->>S: HTTP GET /notes
    S-->>B: HTML page (notes)

    B->>S: HTTP GET /main.css
    S-->>B: main.css

    B->>S: HTTP GET /main.js
    S-->>B: main.js

    note right of B: main.js executes and fetches JSON data

    B->>S: HTTP GET /data.json
    S-->>B: JSON data (including the new note)

    note right of B: Browser uses DOM-API to render all notes
