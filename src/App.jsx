import { Route, Routes } from 'react-router-dom';
import './atoms/styles/reset.css';
import './atoms/styles/_global.css';
import { Header } from './organisms/Headers/Header';
import { MasterTemplate } from './templates/MasterTemplate/MasterTemplate';
import { routerConfig } from './atoms/config/routerConfig.js';
const App = () => {

  const renderWithWrapper = (route) => {
    const Template = () => {
      return (
        <MasterTemplate Header={route.header && <Header />}>
          {<route.element />}
        </MasterTemplate>
      )
    }

    return (
      <Route key={route.id} path={route.path} element={<Template />} />
    )
  }

  return (
    <Routes>
      {routerConfig.map(renderWithWrapper)}
    </Routes>
  )
}

export default App;
