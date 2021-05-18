import React from 'react';
import logo from './logo.svg';
// tslint:disable-next-line: no-submodule-imports
import 'antd/dist/antd.css';
import { Button, DatePicker } from 'antd';

import './App.css';
import { useQuery, useSubscription, gql } from '@apollo/client';
import { AppQuery } from './__generated__/AppQuery';
import { IncomingMessage as IncomingMessageType } from './__generated__/IncomingMessage';

const QUERY = gql`
  query AppQuery {
    getAllRecords {
      id
      name
    }
  }
`;

const IncomingMessage = gql`
  subscription IncomingMessage {
    truths
  }
`;

export function App() {
  const { data } = useQuery<AppQuery>(QUERY);

  const { data: d } = useSubscription<IncomingMessageType>(IncomingMessage);
  console.log({ data, d });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{d?.truths}</span>
        <p>
          <ul>
            {data?.getAllRecords?.map((i) => (
              <li key={i?.id}>{i?.name}</li>
            ))}
          </ul>
        </p>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
