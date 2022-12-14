import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { AuthRouter } from './routes/auth.routes'
import { AppRoutes } from './routes/app.routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from "react-router-dom"
import { GameContextProdivder } from './contexts/GameContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GameContextProdivder>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <AppRoutes />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </GameContextProdivder>
  </React.StrictMode>
)
