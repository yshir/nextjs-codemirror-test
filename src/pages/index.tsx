import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Editor = dynamic(() => import('@src/components/Editor'), { ssr: false });

const initialValue = `\
const foo = 'bar';
`;

const Page: NextPage = () => {
  const [value, setValue] = useState(initialValue);
  return (
    <>
      <h1>Editor</h1>
      <Editor value={value} onChange={setValue} />
      <p>value: {value}</p>
    </>
  );
};

export default Page;
