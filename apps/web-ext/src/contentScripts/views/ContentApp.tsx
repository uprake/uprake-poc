import React from 'react';
import { db } from '~/web-ext/background/db';
import { useLiveQuery } from 'dexie-react-hooks';

export const ContentApp = () => {
  const friends = useLiveQuery(() => db.friends.toArray());

  console.log(friends);

  return <div>Hey!</div>;
};
