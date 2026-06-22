'use client';

import logo from '@/public/images/logo.svg';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }) => {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={logo}
        alt="mPay Network – Payment Gateway"
        width={110}
        height={32}
        priority
        className="h-auto w-auto"
      />
    </div>
  );
};

export default Logo;
