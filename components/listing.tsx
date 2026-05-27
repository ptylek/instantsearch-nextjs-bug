'use client';

import Link from 'next/link';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import singleIndexStateMapping from 'instantsearch.js/es/lib/stateMappings/singleIndex';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { Configure, Hits, SearchBox } from 'react-instantsearch';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
);

export function Listing({ filters }: { filters?: string }) {
  return (
    <InstantSearchNext
      searchClient={searchClient}
      indexName='instant_search'
      routing={{ stateMapping: singleIndexStateMapping('instant_search') }}
    >
      <Configure filters={filters} hitsPerPage={6} />
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link href='/c/Audio'>category: Audio</Link>
        <Link href='/c/Appliances'>category: Appliances</Link>
        <Link href='/s?query=phone'>search: phone</Link>
      </nav>
      <SearchBox />
      <Hits
        hitComponent={({ hit }: { hit: { name: string } }) => (
          <div>{hit.name}</div>
        )}
      />
    </InstantSearchNext>
  );
}
