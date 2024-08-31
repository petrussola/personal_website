'use client';

import {
  PencilSquareIcon,
  UsersIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

type ContactEmailProps = {
  address?: string;
};

export const ContactEmail = ({ address }: ContactEmailProps) => {
  return (
    <div className="flex flex-row gap-5">
      <EnvelopeIcon className="block size-6" />

      <button
        onClick={() => window.open(`mailto:${address}`, '_blank', 'noreferrer')}
      >
        <h3>{address}</h3>
      </button>
    </div>
  );
};

type ContactBlogProps = {
  address?: string;
};

export const ContactLinkedin = ({ address }: ContactLinkedinProps) => {
  return (
    <div className="flex flex-row gap-5">
      <UsersIcon className="block size-6" />

      <button onClick={() => window.open(address, '_blank', 'noreferrer')}>
        <h3>{address}</h3>
      </button>
    </div>
  );
};

export const ContactBlog = ({ address }: ContactBlogProps) => {
  return (
    <div className="flex flex-row gap-5">
      <PencilSquareIcon className="block size-6" />

      <button onClick={() => window.open(address, '_blank', 'noreferrer')}>
        <h3>{address}</h3>
      </button>
    </div>
  );
};

type ContactLinkedinProps = {
  address?: string;
};
