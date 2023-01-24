/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/ProductCard';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import Chip from '@mui/joy/Chip';
import {CssVarsProvider} from '@mui/joy/styles';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

// Data Start

const SolutionsList = [
  {
    name: 'Meet Puneet Gupta',
    description: (
      <>
        Meet our founder, Puneet Gupta, and Discuss your topic including
        <ul>
          <li>Real Estate</li>
          <li>Banking</li>
        </ul>
      </>
    ),
    button: (
      <Link
        className="button button--primary"
        href="https://booking.setmore.com/scheduleappointment/256e8b84-825e-4a0f-916f-8a3ebba8cec5"
        id="Setmore_button_iframe">
        Book NOW!
      </Link>
    ),
  },
];

const WebsitesList = [
  {
    name: 'Applifer',
    description: <>Android© App with App on Google Play© only at ₹10,000</>,
    button: (
      <Link className="button button--primary" to="/contact">
        Contact us!
      </Link>
    ),
  },
];

const GamesList = [
  {
    name: 'Combined Packager',
    description: <>All features in Website Me and Applifer only at ₹12,500</>,
    button: (
      <Link
        className="button button--primary"
        href="https://booking.setmore.com/scheduleappointment/256e8b84-825e-4a0f-916f-8a3ebba8cec5"
        id="Setmore_button_iframe">
        Contact us!
      </Link>
    ),
  },
];

interface Props {
  name: string;
  url: {
    download?: string;
    page?: string;
    type?: string;
    github?: string;
  };
  description: JSX.Element;
  button: JSX.Element;
}

// Data End and Functions Start

function ProductCard({name, url, description, button}: Props) {
  return (
    <CssVarsProvider>
      <div className="col col--12 margin-bottom--lg">
        <div className={clsx('card')}>
          {/* {image && (
            <div className={clsx('card__image')}>
              <Link to={url.page}>
                <img src={image} alt={name} title={name}></img>
              </Link>
            </div>
          )} */}
          <div className="card__body">
            <h3>{name}</h3>
            {description && <p>{description}</p>}
          </div>
          <div className="card__footer">
            <div className="button-group button-group--block">{button}</div>
          </div>
        </div>
      </div>
    </CssVarsProvider>
  );
}

export function Products(): JSX.Element {
  return (
    <div>
      <section>
        <div className="features">
          <div className="col col--12">
            <div className="row">
              {SolutionsList.map((games) => (
                <>
                  <ProductCard
                    url={{
                      download: '',
                      page: '',
                      type: '',
                      github: '',
                    }}
                    description={undefined}
                    button={undefined}
                    key={games.name}
                    {...games}
                  />
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
}
