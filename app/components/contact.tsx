'use client';

import {
  PencilSquareIcon,
  UsersIcon,
  EnvelopeIcon,
  CodeBracketIcon,
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
        <span className="before:block before:absolute before:-inset-1 before:skew-y-1 before:hover:bg-pink-500 relative inline-block hover:text-white">
          <span className="relative text-2xl">Get in touch</span>
        </span>
      </button>
    </div>
  );
};

type ContactLinkedinProps = {
  address: string;
};

export const ContactLinkedin = ({ address }: ContactLinkedinProps) => {
  const [, domain] = address?.split('//');

  return (
    <div className="flex flex-row gap-3 items-center">
      <UsersIcon className="block size-6" />

      <button onClick={() => window.open(address, '_blank', 'noreferrer')}>
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:hover:bg-pink-500 relative inline-block hover:text-white">
          <span className="relative text-2xl">{domain}</span>
        </span>
      </button>
    </div>
  );
};

type ContactBlogProps = {
  address: string;
};

export const ContactBlog = ({ address }: ContactBlogProps) => {
  const [, domain] = address?.split('//');

  return (
    <div className="flex flex-row gap-3 align items-center">
      <PencilSquareIcon className="block size-6" />

      <button onClick={() => window.open(address, '_blank', 'noreferrer')}>
        <span className="before:block before:absolute before:-inset-1 before:skew-y-2 before:hover:bg-pink-500 relative inline-block hover:text-white">
          <span className="relative text-2xl">{domain}</span>
        </span>
      </button>
    </div>
  );
};

type ContactGitHubProps = {
  address: string;
};

export const ContactGitHub = ({ address }: ContactGitHubProps) => {
  const [, domain] = address?.split('//');

  return (
    <div className="flex flex-row gap-3 align items-center">
      <CodeBracketIcon className="block size-6" />

      <button onClick={() => window.open(address, '_blank', 'noreferrer')}>
        <span className="before:block before:absolute before:-inset-1 before:skew-y-2 before:hover:bg-pink-500 relative inline-block hover:text-white">
          <span className="relative text-2xl">{domain}</span>
        </span>
      </button>
    </div>
  );
};
