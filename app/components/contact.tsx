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
    <div className="flex flex-row gap-3 items-center">
      <EnvelopeIcon className="block size-6" />

      <button
        onClick={() => window.open(`mailto:${address}`, '_blank', 'noreferrer')}
      >
        <h3 className="text-2xl">{address}</h3>
      </button>
    </div>
  );
};

type ContactLinkedinProps = {
  address?: string;
};

export const ContactLinkedin = ({ address }: ContactLinkedinProps) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <UsersIcon className="block size-6" />

      <button onClick={() => window.open(address, '_blank', 'noreferrer')}>
        <h3 className="text-2xl">{address}</h3>
      </button>
    </div>
  );
};

type ContactBlogProps = {
  address?: string;
};

export const ContactBlog = ({ address }: ContactBlogProps) => {
  return (
    <div className="flex flex-row gap-3 align items-center">
      <PencilSquareIcon className="block size-6" />

      <button onClick={() => window.open(address, '_blank', 'noreferrer')}>
        <h3 className="text-2xl">{address}</h3>
      </button>
    </div>
  );
};
