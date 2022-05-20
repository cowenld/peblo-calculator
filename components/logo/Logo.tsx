import Image from 'next/image';
import React from 'react';
import { ALT_LOGO } from './Logo.constants';
import logoStyles from './Logo.module.css';

export interface ILogo {}

export const Logo: React.FC<ILogo> = () => {
  return (
    <div className={logoStyles.logo}>
      <a href="https://www.getpeblo.com/">
        <Image src="/peblo.svg" alt={ALT_LOGO} width={104} height={34} />
      </a>
    </div>
  );
};
