# **🤖 Groq Agent**

\<p align="center"\>  
\<a href="https://www.google.com/search?q=https://github.com/kaiors1/groq\_agent"\>  
\<img src="https://www.google.com/search?q=https://placehold.co/150x150/7c3aed/ffffff%3Ftext%3DGA" alt="Groq Agent Logo"\>  
\</a\>  
\</p\>  
\<h3 align="center"\>Un assistente di programmazione AI da terminale, potenziato, personalizzabile e incredibilmente veloce.\</h3\>

\<p align="center"\>  
\<img alt="GitHub" src="https://www.google.com/search?q=https://img.shields.io/github/license/kaiors1/groq\_agent%3Fstyle%3Dfor-the-badge%26color%3D7c3aed"\>  
\<img alt="npm version" src="https://www.google.com/search?q=https://img.shields.io/npm/v/groq-agent%3Fstyle%3Dfor-the-badge%26color%3D7c3aed"\>  
\<img alt="GitHub stars" src="https://www.google.com/search?q=https://img.shields.io/github/stars/kaiors1/groq\_agent%3Fstyle%3Dfor-the-badge%26color%3D7c3aed"\>  
\</p\>  
**Groq Agent** è un fork del fantastico progetto [groq-code-cli](https://github.com/build-with-groq/groq-code-cli) del team build-with-groq. L'obiettivo è espandere la loro base leggera e personalizzabile per fornire un agente AI più completo e pronto all'uso, mantenendo il massimo rispetto per il lavoro originale.

Il cuore del progetto rimane un template trasparente e facile da modificare per chiunque voglia costruire il proprio assistente AI, evitando la complessità dei CLI più grandi. A questa solida base, **Groq Agent** aggiunge funzionalità chiave come la **ricerca web in tempo reale** (tramite Tavily API), la capacità di **leggere contenuti da URL** e una **gestione completa delle sessioni** per salvare e caricare le conversazioni.

## **✨ Funzionalità Principali**

* **⚡ Velocità Estrema**: Sfrutta la potenza dell'API di Groq per risposte quasi istantanee.  
* **🌐 Accesso al Web**: Cerca informazioni aggiornate sul web grazie all'integrazione con Tavily.  
* **🔗 Lettura da URL**: Fornisci un link e l'agente ne analizzerà il contenuto.  
* **💾 Gestione Sessioni**: Salva, carica ed elenca le tue conversazioni per non perdere mai il contesto.  
* **🔧 Totalmente Personalizzabile**: Aggiungi facilmente nuovi comandi e strumenti per adattarlo al tuo workflow.  
* **💻 Interfaccia Intuitiva**: Un'esperienza da terminale (TUI) pulita e facile da usare.

## **🚀 Installazione**

Per iniziare a usare o sviluppare Groq Agent, segui questi passaggi.

\# 1\. Clona il repository  
git clone \[https://github.com/kaiors1/groq\_agent.git\](https://github.com/kaiors1/groq\_agent.git)

\# 2\. Entra nella directory del progetto  
cd groq\_agent

\# 3\. Installa le dipendenze  
npm install

\# 4\. Compila il progetto  
npm run build

\# 5\. Rendi il comando 'groq' disponibile globalmente  
npm link

Per lo sviluppo, puoi lanciare il compilatore in modalità "watch" per applicare automaticamente le modifiche:

npm run dev

## **🎯 Utilizzo**

Una volta installato, avvia una sessione di chat è semplicissimo:

groq

### **Autenticazione**

Al primo avvio, digita il comando /login e inserisci la tua API key di Groq.

Puoi ottenere la tua API key dalla [**Groq Console**](https://console.groq.com/keys).

La chiave verrà salvata in una cartella .groq/ nella tua home directory.

### **Opzioni da riga di comando**

groq \[options\]

Options:  
  \-t, \--temperature \<temp\>    Temperatura per la generazione (default: 1\)  
  \-s, \--system \<message\>      Messaggio di sistema personalizzato  
  \-d, \--debug                 Abilita il logging di debug su debug-agent.log  
  \-p, \--proxy \<url\>           URL del proxy (es. http://proxy:8080)  
  \-h, \--help                  Mostra l'aiuto  
  \-V, \--version               Mostra il numero di versione

## **📚 Comandi Disponibili**

All'interno della chat, puoi usare i seguenti comandi speciali:

| Comando | Descrizione |
| :---- | :---- |
| /help | Mostra questo messaggio di aiuto. |
| /login | Esegui l'accesso con la tua API key di Groq. |
| /model | Seleziona il modello AI da utilizzare. |
| /clear | Pulisce la cronologia della chat corrente. |
| /reasoning | Attiva/disattiva la visualizzazione del ragionamento del modello. |
| /stats | Mostra le statistiche della sessione e l'uso dei token. |
| /save \[nome\] | Salva la sessione corrente con un nome opzionale. |
| /load \<nome\> | Carica una sessione salvata in precedenza. |
| /sessions | Elenca tutte le sessioni salvate. |

## **🛠️ Personalizzazione**

Estendere Groq Agent è semplice. Ecco come aggiungere nuovi strumenti e comandi.

### **Aggiungere un Nuovo Strumento (Tool)**

1. **Definisci lo schema** in src/tools/tool-schemas.ts.  
2. **Implementa la funzione** in src/tools/tools.ts.  
3. **Registra lo strumento** negli oggetti TOOL\_REGISTRY e ALL\_TOOL\_SCHEMAS.

### **Aggiungere un Nuovo Comando (Slash Command)**

1. **Crea la definizione** del comando in src/commands/definitions/.  
2. **Registra il comando** nell'array availableCommands in src/commands/index.ts.

## **🏗️ Struttura del Progetto**

groq\_agent/  
├── src/  
│   ├── commands/     \# Logica per i comandi (es. /help)  
│   ├── core/         \# Cuore dell'agente e del CLI  
│   ├── tools/        \# Strumenti che l'AI può usare (es. web search)  
│   ├── ui/           \# Componenti React per l'interfaccia terminale  
│   └── utils/        \# Funzioni di utilità  
├── package.json      \# Dipendenze e script  
└── tsconfig.json     \# Configurazione TypeScript

**TL;DR:** I file più importanti per iniziare sono src/core/cli.ts (entry point), src/core/agent.ts (logica AI), e src/ui/hooks/useAgent.ts (collegamento tra UI e agente).

## **🔮 Roadmap Futura**

Groq Agent è solo all'inizio. Ecco alcune idee per il futuro:

* **🤖 Modalità Autonoma**: Un agente in grado di pianificare ed eseguire sequenze complesse di comandi.  
* **🐛 Debugging Automatico**: Analizzare errori e stack trace per proporre e applicare soluzioni in autonomia.  
* **🧠 Memoria a Lungo Termine**: Integrare un database vettoriale per ricordare contesti tra sessioni diverse.  
* **🐙 Integrazione con Piattaforme**: Interagire con API come GitHub (per creare Pull Request) o Jira.

Made with ❤️ and high-speed LLMs.