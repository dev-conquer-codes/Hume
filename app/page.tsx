import { fetchAccessToken } from 'hume';
import dynamic from 'next/dynamic';
import type { FC, PropsWithChildren } from 'react';

import { Voice } from '@/components/Voice';

const NoOp: FC<PropsWithChildren<Record<never, never>>> = ({ children }) => (
  <>{children}</>
);

const NoSSR = dynamic(
  () => new Promise<typeof NoOp>((resolve) => resolve(NoOp)),
  { ssr: false },
);

export default async function Home() {
  const accessToken = await fetchAccessToken({
    apiKey:"wUSH8mA3CFfbT6qGMGGhA3lH9Q0cBdSKg6nO7z4Aye0P2YiK",
    secretKey: "opr0igH8kAN3UeQIVNKviio7H3oUuoLK93xdri4y1EIvdm5JJM8Y07ghinRLKjYe",
  });

  return (
    <div className={'p-6'}>
      <h1 className={'my-4 text-lg font-medium'}>Hume EVI React Example</h1>

      <NoSSR>
        {accessToken ? (
          <Voice accessToken={accessToken} />
        ) : (
          <div>Missing API Key</div>
        )}
      </NoSSR>
    </div>
  );
}
