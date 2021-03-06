import React, { Fragment, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import RelayForJustice from './RelayForJustice';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Dashboard = () => {
    const{ contact } = useContext(MyContext);

    const notify = () => {
        toast.info("Message sent!", {
            position: toast.POSITION.TOP_CENTER,
        });
    }

    return(
        <Fragment>
            { contact && <Contact notify={notify} /> }
            <div className="container-fluid page dashboard">
                <Navbar />
                    <Route render={({location}) =>(
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={950} classNames="fade">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/About" component={About} />
                                    <Route path="/Projects" component={Projects} />
                                    <Route path="/relayforjustice" component={RelayForJustice} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
            </div>
        </Fragment>
    )
}

export default Dashboard;