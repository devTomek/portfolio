'use client';

import { useState, MouseEventHandler } from 'react';

const VISIBLE_USERNAME_LENGTH = 3;
const VISIBLE_DOMAIN_LENGTH = 2;

interface EmailMaskProps {
  email: string;
  maskCharacter?: string;
  maskDomain?: boolean;
}

export default function EmailMask({
  email,
  maskCharacter = '*',
  maskDomain = false,
}: EmailMaskProps) {
  const [username, domain] = email.split('@');
  const [domainName, topLevelDomain] = domain.split('.');
  const [show, setShow] = useState(false);

  const handleClick: MouseEventHandler<HTMLSpanElement> = async () => {
    setShow(true);
  };

  const visibleUsernameLength = Math.min(
    VISIBLE_USERNAME_LENGTH,
    username.length,
  );

  const maskedUsername =
    username.slice(0, visibleUsernameLength) +
    maskCharacter.repeat(username.length - visibleUsernameLength);

  const visibleDomainLength = Math.min(
    VISIBLE_DOMAIN_LENGTH,
    domainName.length,
  );

  const maskedDomainName =
    domainName.slice(0, visibleDomainLength) +
    maskCharacter.repeat(domainName.length - visibleDomainLength);

  const maskedDomain = `${maskedDomainName}.${topLevelDomain}`;

  const maskedEmail = maskDomain
    ? `${maskedUsername}@${maskedDomain}`
    : `${maskedUsername}@${domain}`;

  return <span onClick={handleClick}>{show ? email : maskedEmail}</span>;
}
