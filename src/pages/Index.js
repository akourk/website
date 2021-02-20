import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
    <Main
        description={"My name is Alex Kourkoumelis. I'm a Software Engineer located in Seattle, WA, and "
        + 'I am dedicated to pursuing challenging work and solving interesting problems.'}
    >
        <article className="post" id="index">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/">Site Information</Link></h2>
                    <p>
                        Alex Kourkoumelis&apos;s personal website.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </header>
            <p> Thank you for visiting my website! Please feel free to learn more <Link to="/about">about me</Link>,
                look at my <Link to="/resume">resume</Link>, {' '}
                or <Link to="/contact">contact</Link> me.
            </p>
            <p> Source available <a href="https://github.com/akourk/website">here.</a></p>
        </article>
    </Main>
);

export default Index;