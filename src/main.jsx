import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


// 3. extend the theme
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#02031a",
        color: 'white'
      }
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
