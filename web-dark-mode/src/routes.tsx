import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

interface Props {
    toogleTheme(): void;
}

const Routes: React.FC<Props> = ( {toogleTheme} ) => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact 
                 render={props => <Landing {...props} toggleTheme={toogleTheme} />}
                
                />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;