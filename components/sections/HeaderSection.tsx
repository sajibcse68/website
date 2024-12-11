import { Icons } from '@/components/icons';
import { SocialLink } from '@/components/social-link';
import Link from 'next/link';
import ActionButton from '@/components/action-button';
import { cn } from '@/utils/common';
import { RESUME_TYPES } from '../constants';
import Image from 'next/image';

const { LIVE } = RESUME_TYPES;

type Props = {
  usage: 'live' | 'pdf';
};

export default function HeaderSection({ usage }: Props) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-4 my-1">SAJIB KHAN</h2>
          <SocialLink
            href="https://github.com/sajibcse68"
            platform="github"
            aria-label="My GitHub"
            className="mx-1 h-6 w-6"
          />
          <SocialLink
            href="https://linkedin.com/in/sajibkhan"
            platform="linkedin"
            aria-label="My LinkedIn"
            className="mx-1 h-6 w-6"
          />

          <Link href="https://stackoverflow.com/users/4133798/sajib-khan" >
            <Image
              src="/images/stackoverflow.svg"
              alt="stackoverflow"
              height={28}
              width={28}
              className="h-4 w-4 rounded-full"
              priority
              unoptimized
            />
          </Link>
        </div>
        <ActionButton
          text={usage === LIVE ? 'Download Resume' : 'View Live Resume'}
          usage={usage}
          className={cn(usage === LIVE && 'hidden sm:block')}
        />
      </div>

      <div className="flex flex-wrap gap-4 gap-y-1 text-sm">
        <Link
          href="mailto:sajibcse68@gmail.com"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.Mail size={14} className="group-hover:animate-shake" />
          sajibcse68@gmail.com
        </Link>
        <Link
          href="tel:+8801798500100"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.PhoneCall size={14} className="group-hover:animate-shake" />
          +(880) 1798500100
        </Link>
      </div>
    </section>
  );
}
